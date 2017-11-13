import Backbone from 'backbone';

export class Footer extends Backbone.View {
    render() {
        this.$el.html('This is footer');

        return this;
    }
}