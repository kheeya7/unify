import Backbone from 'backbone';
import template from './template.pug';
import huntImage1 from './hunt-image1.jpg';
import huntImage2 from './hunt-image2.jpg';
import huntImage3 from './hunt-image3.jpg';
import personaImage1 from './persona.png';

export class Research extends Backbone.View {
    render() {
        this.$el.html(template({
            huntImage1,
            huntImage2,
            huntImage3,
            personaImage1
        }));

        return this;
    }
}
