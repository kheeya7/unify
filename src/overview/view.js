import Backbone from 'backbone';
import cloud from 'd3-cloud';
import * as d3 from "d3";
import template from './template.pug';

export class Overview extends Backbone.View {
    initialize() {
        this.data = [
            {text: 'Organizing', size: 50},
            {text: 'Communication', size: 40},
            {text: 'Collaboration', size: 40},
            {text: 'Decentralized organization', size: 30},
            {text: 'Feminism', size: 30},
            {text: 'Meeting', size: 30},
            {text: 'Security', size: 25},
            {text: 'Pedagogy', size: 25},
            {text: 'Inviting', size: 20},
            {text: 'Feeling	 of belonging', size: 20},
            {text: 'Safe', size: 20},
        ]
    }

    render() {
        this.$el.html(template());

        this.fill = d3.scaleOrdinal(d3.schemeCategory20);
        
        this.layout = cloud()
            .size([500, 500])
            .words(this.data)
            .padding(5)
            .rotate(() => { return ~~(Math.random() * 2) * 90; })
            .font("Impact")
            .fontSize((d) => { return d.size; })
            .on("end", () => this.drawAfterDelay());
        
        this.layout.start();

        return this;
    }

    drawAfterDelay() {
        setTimeout(() => {
            this.draw();
        }, 1000);

        setTimeout(() => {
            this.render();
        }, 6000);
    }

    draw() {
        d3.select(".word-cloud-container").append("svg")
        .attr("width", this.layout.size()[0])
        .attr("height", this.layout.size()[1])
        .append("g")
        .attr("transform", "translate(" + this.layout.size()[0] / 2 + "," + this.layout.size()[1] / 2 + ")")
        .selectAll("text")
        .data(this.layout.words())
        .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("font-family", "Impact")
        .style("fill", (d, i) => { return this.fill(i); })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });

        return this;
    }
}
