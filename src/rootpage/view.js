import Backbone from 'backbone';

export class Rootpage extends Backbone.View {
    render() {
        this.$el.html('This is rootpage');

        return this;
    }
}