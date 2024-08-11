import * as d3 from 'd3';
import { Application, Container, Graphics, Text } from 'pixi.js';
import { testData } from './TestData';

interface AnimatedValues {
    zoom: number;
    zoomX: number;
    zoomY: number;
}

class Animator<Key extends string> {
    private values: Record<Key, number>;
    private targetValues: Record<Key, number>;
    private durations: Record<Key, number>;

    constructor(initialValues: Record<Key, number>, durations: Record<Key, number>) {
        this.values = initialValues;
        this.targetValues = {... initialValues };
        this.durations = durations;
    }

    public setTarget(key: Key, value: number) {
        this.targetValues[key] = value;
    }

    public update(delta: number) {
        for (const key in this.values) {
            this.values[key] += (this.targetValues[key] - this.values[key]) * (1.0 - Math.exp(- this.durations[key] * delta));
        }
    }

    public get(key: Key) {
        return this.values[key];
    }

    public isAnimating(key: Key) {
        return Math.pow(this.values[key] - this.targetValues[key], 2) > 0.0000001;
    }
}

const animator = new Animator<keyof AnimatedValues>({
    zoom: 1,
    zoomX: 0,
    zoomY: 0,
}, {
    zoom: 0.3,
    zoomX: 0.3,
    zoomY: 0.3,
});

const width = 400;
const height = 400;
const element = document.getElementById('graph-mount-point')!;

const app = new Application();
await app.init({
	antialias: true,
	backgroundAlpha: 0,
	resolution: 1,
	resizeTo: element,
});

element.appendChild(app.canvas);

interface Node extends d3.SimulationNodeDatum {
	id: string;
	graphics?: Container;
	text?: Text;
}

const simulation = d3
	.forceSimulation<Node>(testData.nodes)
	.force(
		'link',
		d3.forceLink(testData.links).id((d: any) => d.id),
	)
	.force('charge', d3.forceManyBody())
	.force('center', d3.forceCenter(width / 2, height / 2));

console.log(simulation.nodes());

const links = new Graphics();
app.stage.addChild(links);

for (const node of simulation.nodes()) {
	const nodeGraphics = new Container();
	const nodeDot = new Graphics();
	nodeDot.setStrokeStyle({
		color: 0xffffff,
		width: 1.5,
	});
	nodeDot.circle(0, 0, 5);
	nodeDot.fill(0xffffff);

	const nodeText = new Text({
		text: node.id,
		style: {
			fill: 0xffffff,
			fontSize: 12,
		},
	});
	nodeText.anchor.set(0.5, 0.5);

	nodeGraphics.addChild(nodeDot);
	nodeGraphics.addChild(nodeText);

	node.graphics = nodeGraphics;
	node.text = nodeText;
	app.stage.addChild(nodeGraphics);
}

d3.select(app.canvas).call(
	// @ts-ignore
	d3
		.drag()
		.container(app.canvas)
		.subject(event => {
			const invZoom = zoom.invert([event.x, event.y]);
			return simulation.find(invZoom[0], invZoom[1], 10);
		})
		.on('start', dragstarted)
		.on('drag', dragged)
		.on('end', dragended),
);

let zoom: d3.ZoomTransform = d3.zoomIdentity;

d3.select(app.canvas).call(
	// @ts-ignore
	d3.zoom().on('zoom', ({ transform }: { transform: d3.ZoomTransform }) => {
		zoom = transform;
        animator.setTarget('zoom', transform.k);
        animator.setTarget('zoomX', transform.x);
        animator.setTarget('zoomY', transform.y);
	}),
);

app.ticker.add((ticker) => {
    animator.update(ticker.deltaTime);

    if (animator.isAnimating('zoom') || animator.isAnimating('zoomX') || animator.isAnimating('zoomY')) {
        console.log('Animating');
        
        app.stage.updateTransform({
            scaleX: animator.get('zoom'),
            scaleY: animator.get('zoom'),
            x: animator.get('zoomX'),
            y: animator.get('zoomY'),
        });
    }

	for (const node of simulation.nodes()) {
		node.text!.scale.set(1 / animator.get('zoom'));
		node.text!.position.set(0, 10);
	}

	for (const node of simulation.nodes()) {
		node.graphics!.position.set(node.x!, node.y!);
	}

	links.clear();
	links.alpha = 0.5;

	for (const link of testData.links) {
		links
			// @ts-ignore
			.moveTo(link.source.x!, link.source.y!)
			// @ts-ignore
			.lineTo(link.target.x!, link.target.y!)
			.fill()
			.stroke({
				color: 0xffffff,
				width: 1 / animator.get('zoom'),
			});
	}
});

let dragX = 0;
let dragY = 0;

function dragstarted(event: any) {
	if (!event.subject) return;

	if (!event.active) simulation.alphaTarget(0.3).restart();
	event.subject.fx = event.subject.x;
	event.subject.fy = event.subject.y;
	dragX = event.x;
	dragY = event.y;
}

function dragged(event: any) {
	if (!event.subject) return;

	dragX += event.dx / animator.get('zoom');
	dragY += event.dy / animator.get('zoom');

	event.subject.fx = dragX;
	event.subject.fy = dragY;
}

function dragended(event: any) {
	if (!event.subject) return;

	if (!event.active) simulation.alphaTarget(0);
	event.subject.fx = null;
	event.subject.fy = null;
}

