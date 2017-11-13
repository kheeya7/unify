import Backbone from 'backbone';

export class Overview extends Backbone.View {
    render() {
        this.$el.html('This is overview');

        return this;
    }
}
