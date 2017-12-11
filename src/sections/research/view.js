import Backbone from 'backbone';
import template from './template.pug';
import huntImage1 from './hunt-image1.jpg';
import huntImage2 from './hunt-image2.jpg';
import huntImage3 from './hunt-image3.jpg';
import personaImage1 from './persona.png';
import chatGroupImage from './paperproto-chatgroup.jpg';
import landingImage from './paperproto-landing.jpg';
import personaPic1 from './pic-susie.png';
import personaPic2 from './pic-andrea.png';
import personaPic3 from './pic-polly.png';
import personaPic4 from './pic-ellie.png';
import interviewPic from './1st-interview-pic-color-500.jpg';

export class Research extends Backbone.View {
    render() {
        this.$el.html(template({
            huntImage1,
            huntImage2,
            huntImage3,
            personaImage1,
            chatGroupImage,
            landingImage,
            personaPic1,
            personaPic2,
            personaPic3,
            personaPic4,
            interviewPic,
        }));

        return this;
    }
}
