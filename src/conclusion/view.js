import Backbone from 'backbone';

export class Conclusion extends Backbone.View {
    render() {
        this.$el.html('This is conclusion');

        return this;
    }
}