import Backbone from 'backbone';

export class Reflection extends Backbone.View {
    render() {
        this.$el.html('This is reflection');

        return this;
    }
}
