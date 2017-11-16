import Backbone from 'backbone';
import template from './template.pug';

export class Footer extends Backbone.View {
    render() {
        this.$el.html(template());

        return this;
    }
}
