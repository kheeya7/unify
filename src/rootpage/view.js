import Backbone from 'backbone';
import template from './template.pug';
import { Header } from '../header/view.js';
import { Overview } from '../overview/view.js';
import { Problem } from '../problem/view.js';
import { Research } from '../research/view.js';
import { Solution } from '../solution/view.js';
import { Conclusion } from '../conclusion/view.js';
import { Reflection } from '../reflection/view.js';
import { WorkCited } from '../work-cited/view.js';
import { Footer } from '../footer/view.js';

export class Rootpage extends Backbone.View {
    render() {
        this.$el.html(template());

        const header = new Header();
        const overview = new Overview({ el: this.$('.overview-section-container') });
        const problem = new Problem();
        const research = new Research();
        const solution = new Solution();
        const conclusion = new Conclusion();
        const reflection = new Reflection();
        const workCited = new WorkCited();
        const footer = new Footer({ el: this.$('.footer-section-container') });

        header.render();
        overview.render();
        problem.render();
        research.render();
        solution.render();
        conclusion.render();
        reflection.render();
        workCited.render();
        footer.render();

        this.$('.header-section-container').append(header.$el);
        // this.$('.overview-section-container').append(overview.$el);
        this.$('.problem-section-container').append(problem.$el);
        this.$('.research-section-container').append(research.$el);
        this.$('.solution-section-container').append(solution.$el);
        this.$('.conclusion-section-container').append(conclusion.$el);
        this.$('.reflection-section-container').append(reflection.$el);
        this.$('.workCited-section-container').append(workCited.$el);
        // this.$('.footer-section-container').append(footer.$el);

        return this;
    }
}
