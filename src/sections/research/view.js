import Backbone from 'backbone';
import template from './template.pug';
import personaImage1 from './persona.png';
import personaPic1 from './pic-susie.png';
import personaPic2 from './pic-andrea.png';
import personaPic3 from './pic-polly.png';
import personaPic4 from './pic-ellie.png';
import interviewPic from './interviewpictures1920x900.jpg';
import paperprotoCommunity from './paper-proto-community.jpg';
import minimalLightbox from 'minimal-lightbox';

export class Research extends Backbone.View {
    render() {
        this.$el.html(template({
            personaImage1,
            personaPic1,
            personaPic2,
            personaPic3,
            personaPic4,
            interviewPic,
            paperprotoCommunity
        }));

        try {
            minimalLightbox(this.$('.clickToZoomImg'));
        } catch (e) {
        }

        return this;
    }
}
