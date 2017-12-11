import Backbone from 'backbone';
import template from './template.pug';
import interviewPhoto from './interview_pic.jpg';
import wordCloud from './word.png';
import icon1 from './icon-complexity.png';
import icon2 from './icon-losingnetwork.png';

export class Problem extends Backbone.View {
    render() {
        this.$el.html(template({
            interviewPhoto,
            wordCloud,
            icon1,
            icon2,
        }));

        return this;
    }
}
