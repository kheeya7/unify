import Backbone from 'backbone';
import template from './template.pug';
import paperProtoPic from './paper-proto.jpg';
import paperProtoPicCom from './paper-proto-community.jpg';
import minimalLightbox from 'minimal-lightbox';

export class Solution extends Backbone.View {
    render() {
        this.$el.html(template({
            paperProtoPic,
            paperProtoPicCom,
        }));

        try {
            minimalLightbox(this.$('.clickToZoomImg'));
        } catch (e) {
        }

        return this;
    }
}
