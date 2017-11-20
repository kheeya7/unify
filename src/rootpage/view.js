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

        const header = new Header({ el: this.$('.header-section-container') });
        const overview = new Overview({ el: this.$('.overview-section-container') });
        const problem = new Problem({ el: this.$('.problem-section-container') });
        const research = new Research({ el: this.$('.research-section-container') });
        const solution = new Solution({ el: this.$('.solution-section-container') });
        const conclusion = new Conclusion({ el: this.$('.conclusion-section-container') });
        const reflection = new Reflection({ el: this.$('.reflection-section-container') });
        const workCited = new WorkCited({ el: this.$('.workCited-section-container') });
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

        return this;
    }
}
