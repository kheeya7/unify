import Backbone from 'backbone';

export class Problem extends Backbone.View {
    render() {
        this.$el.html('This is problem');

        return this;
    }
}