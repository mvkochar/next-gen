import React from 'react'
import './css/BlogsOpen.css'
import { Link } from 'react-router-dom'
import { Faq, Testimonials } from '../components'

const BlogsOpen = () => {
    return (
        <>
            <main className='open-main d-f'>
                <div className="open-main-info">
                    <div className="open-main-caption d-f">
                        <h1 className="page-title">Mastering the Art <br /> of Minimalistic Design</h1>
                        <div className="open-main-start d-f align-center">
                            <a href="" className="d-b"><img src="/images/start-icon.png" alt="start" /></a>
                            <div className="start-name">Start a Project</div>
                        </div>
                    </div>
                </div>
                <div className="open-main-card d-f">
                    <div className="card-item d-f jc-sb">
                        <div className="card-item-title">Author</div>
                        <div className="card-item-value">Sophia Roberts</div>
                    </div>
                    <div className="card-item d-f jc-sb">
                        <div className="card-item-title">Published Date</div>
                        <div className="card-item-value">25th October 2023</div>
                    </div>
                    <div className="card-item d-f jc-sb">
                        <div className="card-item-title">Category</div>
                        <div className="card-item-value">Design</div>
                    </div>
                    <div className="card-item d-f jc-sb">
                        <div className="card-item-title">Read Time</div>
                        <div className="card-item-value">5 minutes</div>
                    </div>
                </div>
            </main>
            <section className='open-content'>
                <div><img src="/images/blogs-open.png" alt="blogs-open" /></div>
                <div className="open-box d-f">
                    <div className="open-social d-f">
                        <a href="" className="d-b">
                            <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="65" height="65" rx="11.5" fill="#1F1F1F" />
                                <rect x="0.5" y="0.5" width="65" height="65" rx="11.5" stroke="#333333" />
                                <path d="M48.3277 23.3132C47.327 23.7439 46.2751 24.0437 45.1978 24.2054C45.7014 24.1191 46.4425 23.2125 46.7375 22.8455C47.1857 22.292 47.5273 21.6601 47.7449 20.982C47.7449 20.9316 47.7952 20.8597 47.7449 20.8237C47.7195 20.8098 47.691 20.8026 47.6621 20.8026C47.6332 20.8026 47.6048 20.8098 47.5794 20.8237C46.4096 21.4572 45.1646 21.9407 43.8738 22.2627C43.8288 22.2765 43.781 22.2777 43.7353 22.2663C43.6897 22.2549 43.648 22.2313 43.6148 22.198C43.5143 22.0783 43.4062 21.9654 43.291 21.8598C42.7646 21.3881 42.1673 21.0021 41.521 20.7157C40.6486 20.3578 39.7063 20.2028 38.7652 20.2624C37.8521 20.3201 36.9606 20.565 36.1462 20.982C35.3442 21.4215 34.6393 22.0187 34.0739 22.7376C33.4792 23.4775 33.0499 24.3362 32.8148 25.2559C32.6209 26.1308 32.5989 27.035 32.75 27.9182C32.75 28.0693 32.75 28.0909 32.6205 28.0693C27.4903 27.3138 23.2811 25.4934 19.8418 21.5864C19.6907 21.4137 19.6115 21.4137 19.4892 21.5864C17.9926 23.8601 18.7193 27.4577 20.5901 29.2349C20.8419 29.4723 21.1009 29.7026 21.3743 29.9184C20.5166 29.8576 19.6798 29.6251 18.9136 29.2349C18.7697 29.1414 18.6905 29.1917 18.6833 29.3644C18.6629 29.6038 18.6629 29.8445 18.6833 30.0839C18.8335 31.2313 19.2856 32.3182 19.9936 33.2335C20.7015 34.1487 21.6399 34.8596 22.7127 35.2933C22.9742 35.4053 23.2467 35.4897 23.5257 35.5451C22.7317 35.7014 21.9173 35.7258 21.1153 35.6171C20.9426 35.5811 20.8779 35.6746 20.9426 35.8401C22.0003 38.7182 24.2956 39.596 25.9793 40.0853C26.2095 40.1213 26.4398 40.1213 26.6988 40.1789C26.6988 40.1789 26.6988 40.1788 26.6556 40.222C26.1592 41.1286 24.1517 41.7402 23.2307 42.0568C21.5497 42.6606 19.7574 42.8914 17.9782 42.7332C17.6976 42.69 17.6328 42.6972 17.5609 42.7332C17.4889 42.7691 17.5609 42.8483 17.64 42.9202C17.9998 43.1577 18.3595 43.3663 18.7337 43.5678C19.8476 44.1753 21.0251 44.6579 22.245 45.0069C28.5624 46.7481 35.6713 45.4673 40.4129 40.7545C44.1401 37.0561 45.4496 31.9547 45.4496 26.8461C45.4496 26.6518 45.687 26.5367 45.8237 26.436C46.7667 25.7012 47.598 24.8336 48.2917 23.8601C48.4118 23.715 48.4734 23.5302 48.4644 23.342C48.4644 23.2341 48.4644 23.2557 48.3277 23.3132Z" fill="#CE7D63" />
                            </svg>
                        </a>
                        <a href="" className="d-b">
                            <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="65" height="65" rx="11.5" fill="#1F1F1F" />
                                <rect x="0.5" y="0.5" width="65" height="65" rx="11.5" stroke="#333333" />
                                <path d="M33 47C40.732 47 47 40.732 47 33C47 25.268 40.732 19 33 19C25.268 19 19 25.268 19 33C19 40.732 25.268 47 33 47Z" fill="#CE7D63" />
                                <path d="M42.3402 32.9996C42.343 33.1914 42.3192 33.3829 42.2688 33.568C42.2184 33.7532 42.1421 33.9306 42.042 34.0944C41.9422 34.2582 41.8197 34.4073 41.6783 34.5372C41.5369 34.667 41.378 34.7762 41.2062 34.8616C41.21 34.9127 41.2132 34.9642 41.2149 35.0156C41.2191 35.1183 41.2191 35.221 41.2149 35.3236C41.2132 35.3751 41.21 35.4265 41.2062 35.4776C41.2062 38.6136 37.5522 41.1616 33.0442 41.1616C28.5362 41.1616 24.8822 38.6136 24.8822 35.4776C24.8783 35.4265 24.8752 35.3751 24.8734 35.3236C24.8692 35.221 24.8692 35.1183 24.8734 35.0156C24.8752 34.9642 24.8783 34.9127 24.8822 34.8616C24.6129 34.7379 24.3738 34.5571 24.1813 34.3318C23.9888 34.1065 23.8476 33.8421 23.7674 33.5568C23.6873 33.2715 23.6703 32.9721 23.7174 32.6795C23.7646 32.3868 23.8748 32.1079 24.0404 31.8621C24.2059 31.6164 24.4229 31.4096 24.6763 31.2561C24.9297 31.1026 25.2135 31.006 25.508 30.9731C25.8025 30.9401 26.1006 30.9716 26.3818 31.0652C26.6629 31.1589 26.9203 31.3126 27.1362 31.5156C27.5369 31.2441 27.9567 31.0018 28.3923 30.7908C28.8281 30.5801 29.2785 30.4009 29.7402 30.2553C30.2018 30.1097 30.6736 29.998 31.1514 29.9207C31.6291 29.8433 32.1121 29.801 32.5962 29.7936L33.6322 24.9356C33.6437 24.8793 33.6665 24.8261 33.699 24.7785C33.7312 24.7312 33.7729 24.6906 33.8208 24.6595C33.8691 24.6283 33.923 24.607 33.9797 24.5965C34.0361 24.5863 34.0942 24.5874 34.1502 24.5996L37.5802 25.2856C37.9263 24.691 38.6529 24.4362 39.2945 24.684C39.936 24.9318 40.3028 25.609 40.1593 26.2817C40.0162 26.9544 39.4051 27.4234 38.7184 27.3881C38.0313 27.3527 37.4717 26.8235 37.3982 26.1396L34.4022 25.5096L33.4922 29.8776C33.9703 29.8878 34.4473 29.9326 34.9191 30.0113C35.8639 30.1688 36.781 30.4619 37.6421 30.8814C38.0722 31.0907 38.4866 31.3308 38.8822 31.5996C39.1666 31.3266 39.524 31.1417 39.9112 31.0673C40.2984 30.9926 40.6989 31.0317 41.0644 31.1796C41.43 31.3276 41.7449 31.5781 41.9713 31.901C42.1977 32.2239 42.3258 32.6055 42.3402 32.9996ZM28.4466 34.9355C28.5173 35.1052 28.6202 35.2596 28.7504 35.3894C28.8802 35.5196 29.0346 35.6225 29.2043 35.6932C29.3742 35.7635 29.5563 35.7997 29.7402 35.7996C30.3065 35.7996 30.8168 35.4584 31.0338 34.9355C31.2504 34.4122 31.1304 33.8102 30.73 33.4098C30.3296 33.0094 29.7276 32.8894 29.2043 33.106C28.6814 33.323 28.3402 33.8333 28.3402 34.3996C28.3402 34.5834 28.3762 34.7654 28.4466 34.9355ZM36.4651 38.2962C36.5368 38.2262 36.5778 38.1306 36.5792 38.0305C36.5806 37.9301 36.5417 37.8335 36.4717 37.7617C36.4017 37.69 36.3062 37.649 36.2061 37.6476C36.1056 37.6462 36.009 37.6851 35.9282 37.7456C35.7176 37.8966 35.4947 38.0295 35.2618 38.1429C35.0288 38.2563 34.7867 38.3499 34.538 38.4225C34.2895 38.495 34.035 38.5464 33.7778 38.5762C33.5202 38.6059 33.2608 38.6136 33.0022 38.5996C32.7439 38.6112 32.4849 38.6007 32.2283 38.5685C31.9717 38.5366 31.7183 38.4828 31.4709 38.4075C31.2231 38.3326 30.9827 38.2367 30.7513 38.1212C30.52 38.0057 30.2988 37.8706 30.0902 37.7176C30.0177 37.6581 29.9257 37.6277 29.8319 37.6322C29.7381 37.6368 29.6495 37.6763 29.583 37.7425C29.5169 37.809 29.4773 37.8975 29.4728 37.9913C29.4682 38.0851 29.4987 38.1772 29.5582 38.2496C29.8042 38.4351 30.0657 38.5989 30.3397 38.7396C30.6138 38.8803 30.8997 38.9969 31.1937 39.0886C31.4877 39.1803 31.7891 39.2464 32.0946 39.2867C32.4002 39.3266 32.7085 39.3402 33.0162 39.3276C33.3238 39.3402 33.6322 39.3266 33.9377 39.2867C34.5497 39.2062 35.1433 39.0212 35.6926 38.7396C35.9667 38.5989 36.2281 38.4351 36.4742 38.2496L36.4651 38.2962ZM36.2082 35.9116C36.3979 35.9137 36.5862 35.877 36.7615 35.8042C36.9369 35.731 37.0954 35.6232 37.2277 35.4871C37.36 35.3509 37.4629 35.1892 37.5308 35.0118C37.5988 34.8346 37.6298 34.6453 37.6222 34.4556C37.6222 33.8893 37.2809 33.379 36.758 33.162C36.2348 32.9454 35.6328 33.0654 35.2324 33.4658C34.832 33.8662 34.7119 34.4682 34.9286 34.9915C35.1456 35.5144 35.6559 35.8556 36.2222 35.8556L36.2082 35.9116Z" fill="#1F1F1F" />
                            </svg>
                        </a>
                        <a href="" className="d-b">
                            <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="65" height="65" rx="11.5" fill="#1F1F1F" />
                                <rect x="0.5" y="0.5" width="65" height="65" rx="11.5" stroke="#333333" />
                                <path d="M39.1306 34.749L39.9285 29.684H35.0135V26.3917C35.0135 25.0068 35.6997 23.6535 37.8939 23.6535H40.1599V19.3403C38.8403 19.1301 37.5069 19.0163 36.1704 19C32.1252 19 29.4841 21.4296 29.4841 25.8219V29.684H25V34.749H29.4841V47H35.0135V34.749H39.1306Z" fill="#CE7D63" />
                            </svg>
                        </a>
                    </div>
                    <div className="open-about d-f">
                        <div>
                            <h3 className="open-about-title">The Essence of Minimalism in Design</h3>
                            <div className="open-about-text d-f">
                                <p>
                                    In the realm of design, the essence of minimalism lies in the deliberate
                                    choice to distill complexity and convey a powerful message through simplicity.
                                    It's an art form that celebrates the beauty of space, emphasizing the significance
                                    of each carefully chosen element. A minimalist design isn't about deprivation;
                                    rather, it's a conscious decision to focus on the core, allowing the audience
                                    to engage with a visual narrative that is both refined and impactful.
                                </p>
                                <p>
                                    As we explore the essence of minimalistic design, we uncover the subtle nuances
                                    that contribute to its allure. The use of negative space, a hallmark of minimalism,
                                    creates breathing room within the composition, allowing the viewer's gaze to rest
                                    and appreciate the inherent beauty of the design. The simplicity in form and color
                                    becomes a canvas for expression, where every line and shade tells a story.
                                    By embracing minimalism, designers have the opportunity to communicate more with less,
                                    fostering a connection that transcends visual aesthetics.
                                </p>
                                <p>
                                    At its core, minimalism in design challenges conventional notions, encouraging
                                    a shift from excess to essence. It invites both creators and consumers to engage
                                    in a thoughtful dialogue with the visual elements, promoting a sense of mindfulness
                                    and intentionality. The essence of minimalistic design, therefore, lies not just in
                                    its visual appeal but in the profound impact it has on the way we perceive and interact
                                    with the world of design.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="open-about-title">Minimalism Beyond Aesthetics</h3>
                            <div className="open-about-text d-f">
                                <p>
                                    Beyond its visually captivating exterior, minimalism is a design
                                    philosophy that permeates every aspect of the creative process,
                                    extending its influence far beyond the surface. This philosophy
                                    becomes a lens through which designers view their craft, shaping
                                    not just what is seen but how it is experienced. The minimalist
                                    approach transcends mere aesthetics; it becomes a mindset that
                                    emphasizes clarity, functionality, and a deeper connection with the audience.
                                </p>
                                <p>
                                    Minimalism, as a philosophy, challenges the notion that complexity is
                                    synonymous with sophistication. It prompts designers to question the
                                    necessity of each element, encouraging a meticulous evaluation of form
                                    and function. This shift in perspective extends to the user experience,
                                    where the removal of unnecessary clutter allows for a seamless and intuitive
                                    interaction. Beyond creating visually pleasing designs, the minimalist
                                    philosophy becomes a guiding force for designing experiences that are
                                    inherently user-centric.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="open-about-title">Practical Tips for Mastering Minimalistic Design</h3>
                            <div className="open-about-text d-f">
                                <p>
                                    The journey to mastering minimalistic design involves a practical
                                    exploration of principles and techniques that breathe life into
                                    the philosophy. It begins with an understanding of the psychology
                                    of color in minimalism, where the strategic use of a limited color
                                    palette contributes to the overall impact of the design. The intentional
                                    choice of typography plays a pivotal role, guiding the viewer through the
                                    visual narrative with clarity and purpose.
                                </p>
                                <p>
                                    Navigating the terrain of minimalistic design also involves a keen awareness
                                    of the power of negative space. Far from being empty, this space becomes
                                    a deliberate pause, allowing the audience to absorb and appreciate the essential
                                    elements of the composition. Striking the right balance between simplicity and
                                    sophistication is an art in itself, requiring a discerning eye and a commitment
                                    to the core principles of minimalism.
                                </p>
                                <p>
                                    Practical tips extend beyond the theoretical, delving into the day-to-day
                                    decisions that shape a minimalist design. From the selection of imagery to
                                    the judicious use of graphic elements, each choice contributes to the overall
                                    impact. Mastery in minimalistic design is not merely about adherence to a set
                                    of rules; it's about developing an intuition that guides the creative process,
                                    ensuring that every design decision serves a purpose and contributes to the
                                    cohesive whole.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="open-author">
                            <div className="open-author-info d-f align-center">
                                <div><img src="/images/blog-author1.png" alt="blog-author1" /></div>
                                <div>
                                    <div className="open-author-name">Wade Warren</div>
                                    <div className="open-author-pos">Art Director</div>
                                </div>
                            </div>
                            <p className="open-author-desc">
                                Crafting visual narratives that captivate and inspire, weaving creativity
                                into every chapter of the design journey.
                            </p>
                            <div className="open-author-link d-f jc-sb align-center">
                                <div className="link-caption d-f align-center">
                                    <a href="" className="d-b">
                                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.8207 2.16228C21.1144 2.46626 20.3718 2.67793 19.6113 2.79207C19.9669 2.73112 20.49 2.09117 20.6982 1.83214C21.0146 1.44142 21.2557 0.995386 21.4093 0.516686C21.4093 0.481133 21.4448 0.430344 21.4093 0.404949C21.3914 0.395169 21.3713 0.390044 21.3509 0.390044C21.3305 0.390044 21.3104 0.395169 21.2925 0.404949C20.4667 0.852114 19.5879 1.1934 18.6768 1.42075C18.645 1.43045 18.6112 1.43132 18.579 1.42326C18.5468 1.41521 18.5174 1.39854 18.494 1.37504C18.423 1.29059 18.3467 1.21085 18.2654 1.13632C17.8938 0.803369 17.4722 0.530861 17.016 0.328764C16.4002 0.0761234 15.735 -0.0332896 15.0707 0.00878765C14.4262 0.0494946 13.7969 0.222378 13.222 0.516686C12.6558 0.826973 12.1583 1.24851 11.7592 1.75596C11.3394 2.27826 11.0364 2.8844 10.8704 3.5336C10.7335 4.15113 10.718 4.78938 10.8247 5.41283C10.8247 5.51949 10.8247 5.53473 10.7333 5.51949C7.11194 4.98619 4.14074 3.70121 1.71298 0.943321C1.60632 0.821426 1.55045 0.821426 1.46411 0.943321C0.407683 2.54828 0.92066 5.08777 2.2412 6.34228C2.41896 6.50989 2.6018 6.67242 2.79481 6.82479C2.18935 6.7818 1.59868 6.61773 1.05779 6.34228C0.956213 6.27626 0.900344 6.31181 0.895265 6.43371C0.880867 6.6027 0.880867 6.77261 0.895265 6.9416C1.00124 7.7515 1.32042 8.51871 1.82015 9.1648C2.31988 9.81088 2.98224 10.3126 3.7395 10.6188C3.9241 10.6979 4.11645 10.7574 4.31342 10.7966C3.75292 10.9069 3.17805 10.9241 2.61196 10.8473C2.49007 10.822 2.44436 10.888 2.49007 11.0048C3.23668 13.0364 4.85687 13.656 6.04536 14.0014C6.20788 14.0268 6.37041 14.0268 6.55326 14.0674C6.55326 14.0674 6.55326 14.0674 6.52278 14.0979C6.17233 14.7378 4.75529 15.1696 4.10518 15.393C2.91857 15.8193 1.65341 15.9822 0.397525 15.8705C0.199444 15.84 0.153733 15.8451 0.102943 15.8705C0.0521536 15.8959 0.102943 15.9517 0.158812 16.0025C0.412762 16.1701 0.666711 16.3174 0.930818 16.4596C1.71707 16.8885 2.54829 17.2291 3.40936 17.4754C7.86871 18.7045 12.8868 17.8005 16.2338 14.4737C18.8647 11.8631 19.7891 8.26214 19.7891 4.65606C19.7891 4.51893 19.9567 4.43766 20.0532 4.36656C20.7188 3.84794 21.3056 3.23546 21.7953 2.54828C21.8801 2.44585 21.9236 2.31542 21.9172 2.18259C21.9172 2.10641 21.9172 2.12165 21.8207 2.16228Z" fill="#CE7D63" />
                                        </svg>
                                    </a>
                                    <div className="link-title">@wadewarren</div>
                                </div>
                                <a href="" className="d-b">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.625 0.375001L18.75 0.375C18.9821 0.375 19.2046 0.467187 19.3687 0.631282C19.5328 0.795376 19.625 1.01794 19.625 1.25V14.375C19.625 14.8582 19.2332 15.25 18.75 15.25C18.2668 15.25 17.875 14.8582 17.875 14.375V3.36244L1.86872 19.3687C1.52701 19.7104 0.97299 19.7104 0.631282 19.3687C0.289573 19.027 0.289573 18.473 0.631282 18.1313L16.6376 2.125L5.625 2.125C5.14175 2.125 4.75 1.73325 4.75 1.25C4.75 0.766751 5.14175 0.375001 5.625 0.375001Z" fill="#E7BEB1" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="open-details d-f">
                            <div className="open-details-bl d-f">
                                <div>
                                    <svg width="66" height="67" viewBox="0 0 66 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="1" width="65" height="65" rx="11.5" fill="#1F1F1F" />
                                        <rect x="0.5" y="1" width="65" height="65" rx="11.5" stroke="#333333" />
                                        <path d="M18.832 29.4442C18.832 36.3333 24.5262 40.0044 28.6945 43.2903C30.1654 44.4499 31.582 45.5416 32.9987 45.5416C34.4154 45.5416 35.832 44.4499 37.3029 43.2903C41.4712 40.0044 47.1654 36.3333 47.1654 29.4442C47.1654 22.555 39.3735 17.6693 32.9987 24.2925C26.6239 17.6693 18.832 22.555 18.832 29.4442Z" fill="#ED142E" />
                                    </svg>
                                </div>
                                <div className="open-details-info d-f jc-sb align-center">
                                    <h4 className="open-details-title">Liked By</h4>
                                    <div className="open-details-users d-f align-center">
                                        <div className="users-count">2.6k</div>
                                        <div className="users-line"></div>
                                        <div className="users-title">Users</div>
                                    </div>
                                </div>
                            </div>
                            <div className="open-details-bl d-f">
                                <div>
                                    <svg width="66" height="67" viewBox="0 0 66 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="1" width="65" height="65" rx="11.5" fill="#1F1F1F" />
                                        <rect x="0.5" y="1" width="65" height="65" rx="11.5" stroke="#333333" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M35.553 24.0556C35.553 21.4476 37.6768 19.3334 40.2967 19.3334C42.9165 19.3334 45.0404 21.4476 45.0404 24.0556C45.0404 26.6636 42.9165 28.7778 40.2967 28.7778C38.9738 28.7778 37.7782 28.2385 36.9187 27.3708L30.3519 31.8419C30.4126 32.1436 30.4444 32.4552 30.4444 32.7735C30.4444 33.404 30.3198 34.0066 30.094 34.5574L37.2945 39.2883C38.1117 38.6228 39.1574 38.2223 40.2967 38.2223C42.9165 38.2223 45.0404 40.3365 45.0404 42.9445C45.0404 45.5525 42.9165 47.6667 40.2967 47.6667C37.6768 47.6667 35.553 45.5525 35.553 42.9445C35.553 42.2614 35.6992 41.6112 35.962 41.0241L28.8196 36.3315C27.9865 37.0556 26.8951 37.4958 25.7007 37.4958C23.0809 37.4958 20.957 35.3816 20.957 32.7735C20.957 30.1655 23.0809 28.0513 25.7007 28.0513C27.2072 28.0513 28.5483 28.7503 29.4166 29.8382L35.7809 25.505C35.6329 25.0476 35.553 24.5603 35.553 24.0556Z" fill="#DA9E8B" />
                                    </svg>
                                </div>
                                <div className="open-details-info d-f jc-sb align-center">
                                    <h4 className="open-details-title">Shared By</h4>
                                    <div className="open-details-users d-f align-center">
                                        <div className="users-count">120</div>
                                        <div className="users-line"></div>
                                        <div className="users-title">Users</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='page-bl'>
                <div className="page-bl-caption">
                    <h2 className="caption-title">Related Blogs</h2>
                    <div className="caption-all">
                        <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
                        <div className="all-title">ALL Blogs</div>

                    </div>
                </div>
                <div className="blogs-box d-f">
                    <div className="blogs-item">
                        <div><img src="/images/blogs1.png" alt="blogs1" /></div>
                        <h3 className="blogs-item-title">Optimizing Mobile User Experience for Higher Conversions</h3>
                        <p className="blogs-item-desc">
                            Mobile devices dominate digital interactions, making mobile
                            user experience crucial for conversion rates. Explore mobile
                            design best practices...
                        </p>
                        <div className="blogs-item-read d-f align-center">
                            <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
                            <div className="read-title">Read Full Blog</div>
                        </div>
                    </div>
                    <div className="blogs-item">
                        <div><img src="/images/blogs2.png" alt="blogs2" /></div>
                        <h3 className="blogs-item-title">Mastering the Art of Minimalistic Design</h3>
                        <p className="blogs-item-desc">
                            Simplicity and elegance take center stage in minimalistic design.
                            Learn the principles of minimalism, how to effectively communicate with fewer elements...
                        </p>
                        <div className="blogs-item-read d-f align-center">
                            <Link to="/blogs-open" className="d-b"><img src="/images/all.png" alt="all" /></Link>
                            <div className="read-title">Read Full Blog</div>
                        </div>
                    </div>
                    <div className="blogs-item">
                        <div><img src="/images/blogs3.png" alt="blogs3" /></div>
                        <h3 className="blogs-item-title">The Psychology of Visual Design in Branding</h3>
                        <p className="blogs-item-desc">
                            Uncover the impact of visual elements in branding and how they influence
                            customer perceptions and emotions. Explore color psychology, typography choices...
                        </p>
                        <div className="blogs-item-read d-f align-center">
                            <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
                            <div className="read-title">Read Full Blog</div>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonials/>
            <Faq/>
        </>
    )
}

export default BlogsOpen