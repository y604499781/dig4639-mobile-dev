(this.webpackJsonpw6a=this.webpackJsonpw6a||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);a(8);var r=a(1),n=a(2),s=a(4),c=a(3),i=a(5),l=a(0),u=a.n(l),o=a(7),d=a.n(o);a(15);function m(e){return u.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var h=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext})}},{key:"renderSquare",value:function(e){var t=this;return u.a.createElement(m,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){var e="Next player: "+(this.state.xIsNext?"X":"O");return u.a.createElement("div",null,u.a.createElement("div",{className:"status"},e),u.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),u.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),u.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(u.a.Component),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],xIsNext:!0},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"game"},u.a.createElement("div",{className:"game-board"},u.a.createElement(h,null)),u.a.createElement("div",{className:"game-info"},u.a.createElement("div",null),u.a.createElement("ol",null)))}}]),t}(u.a.Component);d.a.render(u.a.createElement(v,null),document.getElementById("root"))},15:function(e,t,a){},9:function(e,t,a){e.exports=a(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.06e65230.chunk.js.map