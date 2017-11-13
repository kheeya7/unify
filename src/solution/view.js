import Backbone from 'backbone';

export class Solution extends Backbone.View {
    render() {
        this.$el.html('This is solution');

        return this;
    }
}