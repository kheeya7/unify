import Backbone from 'backbone';
import template from './template.pug';
import interviewPhoto from './interview_pic.jpg';
import wordCloud from './word.png';

export class Problem extends Backbone.View {
    render() {
        this.$el.html(template({interviewPhoto, wordCloud}));

        return this;
    }
}
