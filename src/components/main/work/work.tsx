import * as React from 'react'

export const Work = () => (
  <section className="work" id="work">
    <div className="section-title section-title--orange section-title--more-space section-title--flex-start">
      <div className="section-title__text">
        <div>Selected pieces</div>
        <h2>Work</h2>
      </div>
    </div>

    <div className="work-item work-item--animated js-work-item">
      <span className="work-item__number">/ 01</span>
      <img className="work-item__image" src="./images/innuendo2.jpg" />
      <div className="work-item__image--mobile work-item__image--mobile-one"></div>
      <div className="work-about">
        <h3 className="work-about__title">Innuendo</h3>
        <p className="work-about__caption">PERSONAL PROJECT | ILLUSTRATION</p>
        <p className="work-about__description">
          A showcase of egoistic, self-centred and image obsessed society.
          Sometimes it is more important to act hip thank think for yourself,
          look “artsy” than to craft any kind of art itself.
        </p>
      </div>
    </div>

    <div className="work-item work-item--reverse work-item--animated js-work-item">
      <span className="work-item__number">/ 02</span>
      <img className="work-item__image" src="./images/toilet.jpg" />
      <div className="work-item__image--mobile work-item__image--mobile-two"></div>
      <div className="work-about">
        <h3 className="work-about__title">Respect</h3>
        <p className="work-about__caption">
          POSTER CONTEST “NEI KARTU NEI SALDU” | ILLUSTRATION
        </p>
        <p className="work-about__description">
          A poster contest organised by “Kūrybinės idėjos” to raise the
          awareness of creative copyrights. The scene of wealthy man taking a
          leak on human faced urinal is the direct metaphor of greedy business
          men taking advantage of creative minds, showing zero respect for
          someones intellectual property.
        </p>
      </div>
    </div>

    <div className="work-item work-item--more-space work-item--bigger-image work-item--animated js-work-item">
      <span className="work-item__number">/ 03</span>
      <img className="work-item__image" src="./images/eskedar_coffee.jpg" />
      <div className="work-item__image--mobile work-item__image--mobile-three"></div>
      <div className="work-about">
        <h3 className="work-about__title">Escedar coffee</h3>
        <p className="work-about__caption">ILLUSTRATION</p>
        <p className="work-about__description">
          A simple illustration for Escedar coffee package. Ethiopian coffee
          culture fused with modern day aesthetics.
        </p>
      </div>
    </div>

    <div className="work-item work-item--bigger-image work-item--reverse work-item--animated js-work-item">
      <span className="work-item__number">/ 04</span>
      <img
        className="work-item__image"
        src="./images/remote_tulik_1600x1200.jpg"
      />
      <div className="work-item__image--mobile work-item__image--mobile-four"></div>
      <div className="work-about">
        <h3 className="work-about__title">The remoter</h3>
        <p className="work-about__caption">PERSONAL PROJECT | ILLUSTRATION</p>
        <p className="work-about__description">
          Just a silly weekend evening illustration during the first quarantine
          lockdown in Lithuania. Everybody felt a bit claustrophobic, bored and
          sometimes a bit mad. For me it meant more time at my quality spots.
        </p>
      </div>
    </div>

    <div className="work-item work-item--bigger-image work-item--more-space work-item--animated js-work-item">
      <span className="work-item__number">/ 05</span>
      <img className="work-item__image" src="./images/DF_socials.jpg" />
      <div className="work-item__image--mobile work-item__image--mobile-five"></div>
      <div className="work-about">
        <h3 className="work-about__title">Social fasting</h3>
        <p className="work-about__caption">
          DOFASTING APP | SOCIAL MEDIA ILLUSTRATION SERIES
        </p>
        <p className="work-about__description">
          A series of social media posts illustrating a struggle of a simple
          woman trying to get through another day (or period) of intermittent
          fasting. This campaign is focused to promote DoFasting app and educate
          people about intermittent fasting.
        </p>
      </div>
    </div>

    <div className="work-item work-item--video work-item--animated js-work-item">
      <span className="work-item__number">/ 06</span>
      <img className="work-item__image" src="./images/innuendo2.jpg" />
      <video className="work-item__video" controls>
        <source src="./video/video.mp4" type="video/mp4" />
        <source src="./video/video.mp4" type="video/ogg" />
        Your browser does not support HTML video.
      </video>
      <div className="work-item__image--mobile work-item__image--mobile-six"></div>
      <div className="work-about">
        <h3 className="work-about__title">Dofasting app case study</h3>
        <p className="work-about__caption">
          YOUTUBE AD | ILLUSTRATION | MOTION GRAPHICS | ART DIRECTION
        </p>
        <p className="work-about__description">
          An explanatory video advertising DoFASTING app and its features. We
          were tasked to craft some fine minimalist motion graphics, clean and
          streamlined animations according to product demographics. The main
          challenge was to communicate a message in an abstract and stylised
          form.
        </p>
      </div>
    </div>

    <div className="work-item work-item--animated js-work-item">
      <span className="work-item__number">/ 007</span>
      <img className="work-item__image" src="./images/kvietimas_final.jpg" />
      <div className="work-item__image--mobile work-item__image--mobile-seven"></div>
      <div className="work-about">
        <h3 className="work-about__title">Kilowood</h3>
        <p className="work-about__caption">
          INVITATION CARD | ILLUSTRATION | DESIGN
        </p>
        <p className="work-about__description">
          “You’re either a superstar or an alley bum, a hero or a villain” that
          was the slogan of a company Christmas party hosted by Kilo Health. Any
          kind of social or cultural contrast was the very essence of this
          event.
        </p>
      </div>
    </div>
  </section>
)
