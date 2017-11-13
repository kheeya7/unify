import Backbone from 'backbone';

export class Research extends Backbone.View {
    render() {
        this.$el.html('This is research');

        return this;
    }
}