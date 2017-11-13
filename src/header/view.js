import Backbone from 'backbone';

export class Header extends Backbone.View {
    render() {
        this.$el.html('This is header');

        return this;
    }
}