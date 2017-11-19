import Backbone from 'backbone';
import $ from 'jquery';
import template from './template.pug';
import sampleBackground from './test_background.png';

export class Header extends Backbone.View {

    render() {
        this.$el.html(template({sampleBackground}));

        this.$('nav').affix({
            offset:{  
                // TODO: we need to fix this so that it uses the top-section height              
                top : 280 - this.$('nav').height()
            }
        })

        return this;
    }
}
