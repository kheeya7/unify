import Backbone from 'backbone';
import template from './template.pug';

export class Problem extends Backbone.View {
    render() {
        this.$el.html(template());

        return this;
    }
}
