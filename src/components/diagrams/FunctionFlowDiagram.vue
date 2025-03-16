<template>
	<div class="diagram-container">
		<svg
			width="600"
			height="300"
			viewBox="0 0 600 300"
			xmlns="http://www.w3.org/2000/svg"
		>
			<!-- Function Call Box -->
			<rect
				x="50"
				y="50"
				width="200"
				height="60"
				rx="8"
				fill="#f0fdf4"
				stroke="#2f855a"
				stroke-width="2"
			/>
			<text
				x="70"
				y="85"
				fill="#2f855a"
				font-family="monospace"
				font-size="14"
				font-weight="bold"
			>
				calculateTotal(25, 2)
			</text>

			<!-- Arrow Down -->
			<path
				d="M150 110 L150 140"
				stroke="#4a5568"
				stroke-width="2"
				marker-end="url(#arrowhead)"
			/>
			<text x="160" y="130" fill="#4a5568" font-family="sans-serif" font-size="12">
				Parameters
			</text>

			<!-- Function Processing Box -->
			<rect
				x="50"
				y="140"
				width="500"
				height="80"
				rx="8"
				fill="#fff"
				stroke="#3298dc"
				stroke-width="2"
			/>
			<text
				x="70"
				y="170"
				fill="#363636"
				font-family="monospace"
				font-size="14"
			>
				function calculateTotal(price, quantity) {
			</text>
			<text
				x="90"
				y="195"
				fill="#363636"
				font-family="monospace"
				font-size="14"
			>
				return price * quantity; // 25 * 2 = 50
			</text>

			<!-- Arrow Down -->
			<path
				d="M150 220 L150 250"
				stroke="#4a5568"
				stroke-width="2"
				marker-end="url(#arrowhead)"
			/>
			<text x="160" y="240" fill="#4a5568" font-family="sans-serif" font-size="12">
				Return Value
			</text>

			<!-- Result Box -->
			<rect
				x="50"
				y="250"
				width="200"
				height="40"
				rx="8"
				fill="#f0fdf4"
				stroke="#2f855a"
				stroke-width="2"
			/>
			<text
				x="70"
				y="275"
				fill="#2f855a"
				font-family="monospace"
				font-size="14"
				font-weight="bold"
			>
				Result: 50
			</text>

			<!-- Arrow Marker Definition -->
			<defs>
				<marker
					id="arrowhead"
					markerWidth="10"
					markerHeight="7"
					refX="9"
					refY="3.5"
					orient="auto"
				>
					<polygon points="0 0, 10 3.5, 0 7" fill="#4a5568" />
				</marker>
			</defs>
		</svg>
	</div>
</template>

<script setup>
// No props or logic needed for this static diagram
</script>

<script>
export default {
	name: 'FunctionFlowDiagram'
}
</script>

<style scoped>
.diagram-container {
	width: 100%;
	max-width: 600px;
	margin: 2rem auto;
}
</style> 