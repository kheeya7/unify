import Backbone from 'backbone';
import $ from 'jquery';
import template from './template.pug';

export class Header extends Backbone.View {
    render() {
        this.$el.html(template());

        this.$('nav').affix({
            offset:{  
                // TODO: we need to fix this so that it uses the top-section height              
                top : 280 - this.$('nav').height()
            }
        })

        return this;
    }
}
