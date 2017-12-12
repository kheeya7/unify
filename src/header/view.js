import Backbone from 'backbone';
import $ from 'jquery';
import template from './template.pug';
import sampleBackground from './test_background.png';
import headerImage1 from './header-image1.png';
import headerImage2 from './header-image2.png';
import headerImage3 from './header-image3.png';

export class Header extends Backbone.View {
    render() {
        this.$el.html(template({
            sampleBackground,
            headerImage1,
            headerImage2,
            headerImage3,
        }));

        this.$('nav').affix({
            offset:{  
                // TODO: we need to fix this so that it uses the top-section height              
                top : this.$('.pre-navbar-header').height() - this.$('nav').height(),
            }
        })

        return this;
    }
}
