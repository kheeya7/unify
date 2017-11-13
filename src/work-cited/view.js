import Backbone from 'backbone';

export class WorkCited extends Backbone.View {
    render() {
        this.$el.html('This is work cited');

        return this;
    }
}