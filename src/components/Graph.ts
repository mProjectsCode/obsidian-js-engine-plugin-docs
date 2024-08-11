import * as d3 from 'd3';
import { Application, Container, Graphics, Text } from 'pixi.js';
import { testData } from './TestData';

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
		app.stage.updateTransform({
			scaleX: transform.k,
			scaleY: transform.k,
			x: transform.x,
			y: transform.y,
		});
	}),
);

app.ticker.add(() => {
	for (const node of simulation.nodes()) {
		node.text!.scale.set(1 / zoom.k);
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
				width: 1 / zoom.k,
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

	dragX += event.dx / zoom.k;
	dragY += event.dy / zoom.k;

	event.subject.fx = dragX;
	event.subject.fy = dragY;
}

function dragended(event: any) {
	if (!event.subject) return;

	if (!event.active) simulation.alphaTarget(0);
	event.subject.fx = null;
	event.subject.fy = null;
}
