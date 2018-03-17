export interface Theme {
    canvasBackground: string;
    networkOptions: vis.Options;
    nodeHighlightColor: string[];
    nodeUnexpanedColor: string[];
}

export class Themes {
    static DEFAULT() {
        return {
            canvasBackground: "none",
            nodeHighlightColor: ["#00FF00", "#FFFFFF"],
            nodeUnexpanedColor: ["rgba(255, 0, 0, 0.9)", "rgba(0, 128, 0, 0.9)", "#FFFFFF"],
            networkOptions: {
                layout: {
                    improvedLayout: false
                },
                nodes: {
                    shape: 'dot',
                    scaling: {
                        min: 10,
                        max: 30
                    },
                    font: {
                        size: 14,
                        strokeWidth: 7
                    }
                },
                edges: {
                    width: 0.05,
                    font: {
                        size: 0,
                    },
                    color: {
                        highlight: '#ff0000',
                        hover: '#848484',
                    },
                    hoverWidth: 0.05,
                    selectionWidth: 0.08,
                    arrows: {
                        from: {},
                        to: {
                            enabled: true,
                            scaleFactor: 0.5,
                        }
                    },
                    smooth: {
                        enabled: true,
                        type: 'continuous',
                        roundness: 0.5,
                    }
                },
                physics: {
                    stabilization: false,
                    solver: 'forceAtlas2Based',
                    barnesHut: {
                        gravitationalConstant: -80000,
                        springConstant: 0.001,
                        springLength: 200
                    },
                    forceAtlas2Based: {
                        gravitationalConstant: -26,
                        centralGravity: 0.005,
                        springLength: 230,
                        springConstant: 0.18
                    },
                },
                interaction: {
                    tooltipDelay: 200,
                    hover: true,
                    hideEdgesOnDrag: true,
                    selectable: true,
                    navigationButtons: true,
                }
            }
        };
    }

    static BLACK() {
        return {
            canvasBackground: "#111111",
            nodeHighlightColor: ["yellow", "black"],
            nodeUnexpanedColor: ["rgba(255, 0, 0, 0.5)", "rgba(0, 255, 0, 0.5)", "#FFFFFF"],
            networkOptions: {
                layout: {
                    improvedLayout: false
                },
                nodes: {
                    shape: 'dot',
                    scaling: {
                        min: 10,
                        max: 30
                    },
                    font: {
                        size: 14,
                        strokeWidth: 7
                    }
                },
                edges: {
                    width: 0.05,
                    font: {
                        size: 0,
                    },
                    color: {
                        highlight: '#ff0000',
                        hover: '#848484',
                    },
                    selectionWidth: 0.1,
                    arrows: {
                        from: {},
                        to: {
                            enabled: true,
                            scaleFactor: 0.5,
                        }
                    },
                    smooth: {
                        enabled: true,
                        type: 'continuous',
                        roundness: 0.5,
                    }
                },
                physics: {
                    stabilization: false,
                    solver: 'forceAtlas2Based',
                    barnesHut: {
                        gravitationalConstant: -80000,
                        springConstant: 0.001,
                        springLength: 200
                    },
                    forceAtlas2Based: {
                        gravitationalConstant: -26,
                        centralGravity: 0.005,
                        springLength: 230,
                        springConstant: 0.18
                    },
                },
                interaction: {
                    tooltipDelay: 200,
                    hover: true,
                    hideEdgesOnDrag: true,
                    selectable: true,
                    navigationButtons: true,
                }
            }
        };
    }
}