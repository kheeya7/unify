import Backbone from 'backbone';
import template from './template.pug';
import icon1 from './icon-role.png';
import icon2 from './icon-type.png';
import icon3 from './icon-responsibilities.png';
import icon4 from './icon-duration.png';

export class Overview extends Backbone.View {
    render() {
        this.$el.html(template({
            icon1,
            icon2,
            icon3,
            icon4,
        }));

        return this;
    }
}
