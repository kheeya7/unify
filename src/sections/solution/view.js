import Backbone from 'backbone';
import template from './template.pug';
import paperProtoPic from './paper-proto.jpg';
import paperProtoPicCom from './paper-proto-community.jpg';
import minimalLightbox from 'minimal-lightbox';
import slide1 from './slide1.png';
import slide2 from './slide2.png';
import slide3 from './slide3.png';

export class Solution extends Backbone.View {
    render() {
        this.$el.html(template({
            paperProtoPic,
            paperProtoPicCom,
            slide1,
            slide2,
            slide3,
        }));

        try {
            minimalLightbox(this.$('.clickToZoomImg'));
        } catch (e) {
        }

        return this;
    }
}
