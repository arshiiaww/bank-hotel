import Image from 'next/image';
import facilitiesLeft from "/public/assets/images/facilities-left-img.jpg";
import facilitiesRight from "/public/assets/images/facilities-right-img.jpg";
import facilities01 from "/public/assets/images/facilities-01.jpg";
import facilities02 from "/public/assets/images/facilities-02.jpg"
import facilities03 from "/public/assets/images/facilities-03.jpg"

const Facilities = () => {
    return ( 
        <section className="facilities" id="facil">
            <div className="container">
                <div className="facilities-contents">
                    <div className="facilities-left">
                        <p className="facilities-left__text">ART & CONGRESS HALL</p>
                        <Image 
                            src={facilitiesLeft}
                            className='facilities-left__img'
                            alt='facilities'
                        />
                        
                    </div>
                    <div className="facilities-mid">
                        <div className="facilities-mid__title">
                            <h2 className="facilities-mid__title-heading">OUR FACI <span className="facilities-mid__title-heading__span">LITIES</span></h2>  
                            <svg className="facilities-mid__title-star" width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 0L18.852 13.6825L27.7862 3.42823L21.0395 15.3127L34.1435 12.4034L21.875 17.9504L34.1435 23.4974L21.0395 20.5882L27.7862 32.4727L18.852 22.2184L17.5 35.9009L16.1481 22.2184L7.21376 32.4727L13.9606 20.5882L0.85651 23.4974L13.125 17.9504L0.85651 12.4034L13.9606 15.3127L7.21376 3.42823L16.1481 13.6825L17.5 0Z" fill="#FCD043"/>
                                </svg>
                        </div>
                        <p className="facilities-mid__description">Bank Hotel offers you a wide range of additional services and facilities. Visit our restaurant to try exclusive meals, book a conference hall to organize a business meeting, or relax in the art-bar.</p>
                    </div>
                    <div className="facilities-right">
                        <Image 
                         src={facilitiesRight}
                         className='facilities-right__img'
                         alt='facilities right img'
                        />
                        
                        <svg className="facilities-right__label" width="191" height="190" viewBox="0 0 191 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M53.37 9.4325L58.3492 7.29232C60.6412 6.34113 62.38 7.05452 63.3284 9.11543C64.2768 11.2556 63.5655 13.0787 61.2735 14.0299L57.796 15.536L59.8509 20.2126L58.3492 20.8468L53.37 9.4325ZM57.2427 14.1884L60.246 12.9202C61.9848 12.2068 62.38 11.0971 61.8267 9.74956C61.2735 8.40204 60.167 8.00571 58.4282 8.7191L55.4249 9.98736L57.2427 14.1884Z" fill="#1B3B36"/>
                            <path d="M53.37 9.4325L58.3492 7.29232C60.6412 6.34113 62.38 7.05452 63.3284 9.11543C64.2768 11.2556 63.5655 13.0787 61.2735 14.0299L57.796 15.536L59.8509 20.2126L58.3492 20.8468L53.37 9.4325ZM57.2427 14.1884L60.246 12.9202C61.9848 12.2068 62.38 11.0971 61.8267 9.74956C61.2735 8.40204 60.167 8.00571 58.4282 8.7191L55.4249 9.98736L57.2427 14.1884Z" fill="black" fillOpacity="0.2"/>
                            <path d="M76.2147 1.66438L81.9843 0.792455C84.2763 0.475392 85.936 1.50585 86.1731 3.48749C86.4102 4.99354 85.936 6.26179 84.5134 6.89592C86.0151 6.97518 86.4102 7.92637 86.7264 9.11536C87.0425 10.3043 87.1215 11.6519 87.9909 12.3653L86.1731 12.6031C85.6199 12.2067 85.6989 10.7799 85.3037 9.67022C84.9876 8.48123 84.5134 7.53004 82.9327 7.76784L78.9809 8.40197L79.7713 13.6335L78.1116 13.8713L76.2147 1.66438ZM82.0633 6.57886C83.565 6.34106 84.8295 5.7862 84.5924 3.96309C84.4344 2.7741 83.644 1.98144 82.0633 2.21924L78.0325 2.85336L78.6648 7.13372L82.0633 6.57886Z" fill="#1B3B36"/>
                            <path d="M76.2147 1.66438L81.9843 0.792455C84.2763 0.475392 85.936 1.50585 86.1731 3.48749C86.4102 4.99354 85.936 6.26179 84.5134 6.89592C86.0151 6.97518 86.4102 7.92637 86.7264 9.11536C87.0425 10.3043 87.1215 11.6519 87.9909 12.3653L86.1731 12.6031C85.6199 12.2067 85.6989 10.7799 85.3037 9.67022C84.9876 8.48123 84.5134 7.53004 82.9327 7.76784L78.9809 8.40197L79.7713 13.6335L78.1116 13.8713L76.2147 1.66438ZM82.0633 6.57886C83.565 6.34106 84.8295 5.7862 84.5924 3.96309C84.4344 2.7741 83.644 1.98144 82.0633 2.21924L78.0325 2.85336L78.6648 7.13372L82.0633 6.57886Z" fill="black" fillOpacity="0.2"/>
                            <path d="M100.871 0L109.407 0.871923L109.249 2.29871L102.373 1.58531L101.978 5.5486L108.38 6.18273L108.221 7.60951L101.82 6.97539L101.345 11.2557L108.301 11.8899L108.142 13.3166L99.6067 12.3655L100.871 0Z" fill="#1B3B36"/>
                            <path d="M100.871 0L109.407 0.871923L109.249 2.29871L102.373 1.58531L101.978 5.5486L108.38 6.18273L108.221 7.60951L101.82 6.97539L101.345 11.2557L108.301 11.8899L108.142 13.3166L99.6067 12.3655L100.871 0Z" fill="black" fillOpacity="0.2"/>
                            <path d="M124.187 4.27979L126.321 5.15171L126.163 16.3282L133.671 8.08454L135.805 8.95647L131.221 20.5293L129.64 19.8159L133.434 10.1455L126.005 18.3891L124.661 17.8342L124.819 6.73702L121.026 16.4074L119.603 15.8526L124.187 4.27979Z" fill="#1B3B36"/>
                            <path d="M124.187 4.27979L126.321 5.15171L126.163 16.3282L133.671 8.08454L135.805 8.95647L131.221 20.5293L129.64 19.8159L133.434 10.1455L126.005 18.3891L124.661 17.8342L124.819 6.73702L121.026 16.4074L119.603 15.8526L124.187 4.27979Z" fill="black" fillOpacity="0.2"/>
                            <path d="M149.004 16.8042L150.348 17.7554L143.155 27.9014L141.812 26.9502L149.004 16.8042Z" fill="#1B3B36"/>
                            <path d="M149.004 16.8042L150.348 17.7554L143.155 27.9014L141.812 26.9502L149.004 16.8042Z" fill="black" fillOpacity="0.2"/>
                            <path d="M162.916 40.265C160.624 42.4052 158.174 42.1674 156.119 39.8687C153.985 37.4907 153.827 35.1128 156.277 32.8933L162.126 27.5825L163.232 28.7715L157.305 34.0823C155.645 35.5884 155.645 37.3322 157.067 38.9175C158.49 40.5028 160.15 40.5028 161.73 39.076L167.579 33.7652L168.686 34.9542L162.916 40.265Z" fill="#1B3B36"/>
                            <path d="M162.916 40.265C160.624 42.4052 158.174 42.1674 156.119 39.8687C153.985 37.4907 153.827 35.1128 156.277 32.8933L162.126 27.5825L163.232 28.7715L157.305 34.0823C155.645 35.5884 155.645 37.3322 157.067 38.9175C158.49 40.5028 160.15 40.5028 161.73 39.076L167.579 33.7652L168.686 34.9542L162.916 40.265Z" fill="black" fillOpacity="0.2"/>
                            <path d="M177.773 48.0371L178.801 50.098L171.134 58.1831L182.199 57.1527L183.226 59.2136L172.083 64.6829L171.371 63.2561L180.697 58.738L169.712 59.7684L169.079 58.5002L176.667 50.4943L167.34 55.0125L166.629 53.5857L177.773 48.0371Z" fill="#1B3B36"/>
                            <path d="M177.773 48.0371L178.801 50.098L171.134 58.1831L182.199 57.1527L183.226 59.2136L172.083 64.6829L171.371 63.2561L180.697 58.738L169.712 59.7684L169.079 58.5002L176.667 50.4943L167.34 55.0125L166.629 53.5857L177.773 48.0371Z" fill="black" fillOpacity="0.2"/>
                            <path d="M190.025 91.3929L189.946 97.2586C189.946 99.5573 188.603 100.984 186.627 100.984C185.125 100.984 183.94 100.271 183.544 98.7646C183.228 100.191 182.201 100.508 180.936 100.588C179.751 100.667 178.328 100.588 177.538 101.301V99.478C178.012 99.0024 179.356 99.3195 180.62 99.0817C181.806 98.9232 182.833 98.6854 182.912 97.0208L182.991 92.9782L177.696 92.899V91.2344L190.025 91.3929ZM184.256 96.3867C184.256 97.972 184.572 99.2402 186.39 99.3195C187.575 99.3195 188.524 98.6854 188.524 97.1L188.603 92.9782L184.256 92.899V96.3867Z" fill="#1B3B36"/>
                            <path d="M190.025 91.3929L189.946 97.2586C189.946 99.5573 188.603 100.984 186.627 100.984C185.125 100.984 183.94 100.271 183.544 98.7646C183.228 100.191 182.201 100.508 180.936 100.588C179.751 100.667 178.328 100.588 177.538 101.301V99.478C178.012 99.0024 179.356 99.3195 180.62 99.0817C181.806 98.9232 182.833 98.6854 182.912 97.0208L182.991 92.9782L177.696 92.899V91.2344L190.025 91.3929ZM184.256 96.3867C184.256 97.972 184.572 99.2402 186.39 99.3195C187.575 99.3195 188.524 98.6854 188.524 97.1L188.603 92.9782L184.256 92.899V96.3867Z" fill="black" fillOpacity="0.2"/>
                            <path d="M186.703 121.277C185.597 125.082 182.04 126.192 178.8 125.241C175.559 124.29 173.109 121.515 174.137 117.71C175.243 113.906 178.8 112.796 182.04 113.747C185.281 114.698 187.731 117.473 186.703 121.277ZM175.48 118.107C174.69 121.04 176.824 122.942 179.195 123.655C181.566 124.369 184.49 123.814 185.281 120.881C186.071 117.948 183.937 116.046 181.566 115.332C179.195 114.698 176.35 115.174 175.48 118.107Z" fill="#1B3B36"/>
                            <path d="M186.703 121.277C185.597 125.082 182.04 126.192 178.8 125.241C175.559 124.29 173.109 121.515 174.137 117.71C175.243 113.906 178.8 112.796 182.04 113.747C185.281 114.698 187.731 117.473 186.703 121.277ZM175.48 118.107C174.69 121.04 176.824 122.942 179.195 123.655C181.566 124.369 184.49 123.814 185.281 120.881C186.071 117.948 183.937 116.046 181.566 115.332C179.195 114.698 176.35 115.174 175.48 118.107Z" fill="black" fillOpacity="0.2"/>
                            <path d="M176.034 145.453C173.979 148.782 170.265 148.861 167.34 147.117C164.495 145.374 162.835 141.965 164.969 138.636C167.024 135.307 170.739 135.228 173.663 136.971C176.508 138.715 178.168 142.044 176.034 145.453ZM166.155 139.349C164.574 141.965 166.076 144.422 168.21 145.691C170.344 147.038 173.189 147.276 174.849 144.74C176.429 142.124 174.928 139.667 172.794 138.398C170.66 137.051 167.735 136.734 166.155 139.349Z" fill="#1B3B36"/>
                            <path d="M176.034 145.453C173.979 148.782 170.265 148.861 167.34 147.117C164.495 145.374 162.835 141.965 164.969 138.636C167.024 135.307 170.739 135.228 173.663 136.971C176.508 138.715 178.168 142.044 176.034 145.453ZM166.155 139.349C164.574 141.965 166.076 144.422 168.21 145.691C170.344 147.038 173.189 147.276 174.849 144.74C176.429 142.124 174.928 139.667 172.794 138.398C170.66 137.051 167.735 136.734 166.155 139.349Z" fill="black" fillOpacity="0.2"/>
                            <path d="M162.911 162.099L161.252 163.605L151.372 158.453L155.403 168.916L153.743 170.422L145.445 161.148L146.63 160.117L153.506 167.806L149.475 157.502L150.503 156.55L160.303 161.703L153.427 154.014L154.613 152.983L162.911 162.099Z" fill="#1B3B36"/>
                            <path d="M162.911 162.099L161.252 163.605L151.372 158.453L155.403 168.916L153.743 170.422L145.445 161.148L146.63 160.117L153.506 167.806L149.475 157.502L150.503 156.55L160.303 161.703L153.427 154.014L154.613 152.983L162.911 162.099Z" fill="black" fillOpacity="0.2"/>
                            <path d="M132.329 178.904C133.277 180.41 134.7 180.568 136.201 179.855C137.466 179.221 138.493 178.19 137.782 176.684C137.15 175.337 135.253 175.971 133.198 176.447C131.222 176.922 129.167 177.16 128.061 174.94C126.875 172.562 128.772 170.502 130.827 169.471C133.356 168.282 136.043 168.441 137.387 171.136L135.964 171.849C135.016 169.947 133.119 169.947 131.38 170.739C130.036 171.373 128.772 172.562 129.562 174.148C130.274 175.654 132.249 175.099 134.225 174.623C136.201 174.148 138.256 173.751 139.205 175.812C140.311 178.111 138.809 180.093 136.754 181.044C134.462 182.154 132.249 181.916 130.906 179.538L132.329 178.904Z" fill="#1B3B36"/>
                            <path d="M132.329 178.904C133.277 180.41 134.7 180.568 136.201 179.855C137.466 179.221 138.493 178.19 137.782 176.684C137.15 175.337 135.253 175.971 133.198 176.447C131.222 176.922 129.167 177.16 128.061 174.94C126.875 172.562 128.772 170.502 130.827 169.471C133.356 168.282 136.043 168.441 137.387 171.136L135.964 171.849C135.016 169.947 133.119 169.947 131.38 170.739C130.036 171.373 128.772 172.562 129.562 174.148C130.274 175.654 132.249 175.099 134.225 174.623C136.201 174.148 138.256 173.751 139.205 175.812C140.311 178.111 138.809 180.093 136.754 181.044C134.462 182.154 132.249 181.916 130.906 179.538L132.329 178.904Z" fill="black" fillOpacity="0.2"/>
                            <path d="M115.728 177.396L113.831 177.872L113.357 175.969L115.254 175.494L115.728 177.396Z" fill="#1B3B36"/>
                            <path d="M115.728 177.396L113.831 177.872L113.357 175.969L115.254 175.494L115.728 177.396Z" fill="black" fillOpacity="0.2"/>
                            <path d="M84.1152 190.001L79.6893 189.287C78.5828 189.129 77.1602 188.891 76.5279 188.336C75.8166 187.702 75.3424 186.751 75.5004 185.562C75.7375 184.214 76.5279 183.422 77.7924 183.105C76.3698 182.55 75.6585 181.282 75.9746 179.775C76.2908 177.952 77.8715 176.446 80.2425 176.843L86.1702 177.794L84.1152 190.001ZM83.4039 184.452L80.1635 183.897C78.3457 183.58 77.4763 184.135 77.2392 185.403C76.9231 187.068 78.1086 187.544 79.5312 187.781L82.7716 188.336L83.4039 184.452ZM84.2733 178.824L80.1635 178.19C78.7409 177.952 77.7134 178.666 77.4763 180.013C77.2392 181.599 78.4247 182.233 79.7683 182.471L83.483 183.105L84.2733 178.824Z" fill="#1B3B36"/>
                            <path d="M84.1152 190.001L79.6893 189.287C78.5828 189.129 77.1602 188.891 76.5279 188.336C75.8166 187.702 75.3424 186.751 75.5004 185.562C75.7375 184.214 76.5279 183.422 77.7924 183.105C76.3698 182.55 75.6585 181.282 75.9746 179.775C76.2908 177.952 77.8715 176.446 80.2425 176.843L86.1702 177.794L84.1152 190.001ZM83.4039 184.452L80.1635 183.897C78.3457 183.58 77.4763 184.135 77.2392 185.403C76.9231 187.068 78.1086 187.544 79.5312 187.781L82.7716 188.336L83.4039 184.452ZM84.2733 178.824L80.1635 178.19C78.7409 177.952 77.7134 178.666 77.4763 180.013C77.2392 181.599 78.4247 182.233 79.7683 182.471L83.483 183.105L84.2733 178.824Z" fill="black" fillOpacity="0.2"/>
                            <path d="M57.0067 182.55L55.3469 181.837L55.9792 168.52L57.6389 169.233L57.3228 173.197L62.1439 175.337L64.9101 172.483L66.4908 173.197L57.0067 182.55ZM61.1165 176.367L57.2438 174.623L56.7696 180.806L61.1165 176.367Z" fill="#1B3B36"/>
                            <path d="M57.0067 182.55L55.3469 181.837L55.9792 168.52L57.6389 169.233L57.3228 173.197L62.1439 175.337L64.9101 172.483L66.4908 173.197L57.0067 182.55ZM61.1165 176.367L57.2438 174.623L56.7696 180.806L61.1165 176.367Z" fill="black" fillOpacity="0.2"/>
                            <path d="M38.9091 172.324L37.5655 171.215L38.8301 159.245L32.5073 167.093L31.3218 166.142L39.1462 156.471L40.5689 157.581L39.3043 169.471L45.5481 161.703L46.7336 162.654L38.9091 172.324Z" fill="#1B3B36"/>
                            <path d="M38.9091 172.324L37.5655 171.215L38.8301 159.245L32.5073 167.093L31.3218 166.142L39.1462 156.471L40.5689 157.581L39.3043 169.471L45.5481 161.703L46.7336 162.654L38.9091 172.324Z" fill="black" fillOpacity="0.2"/>
                            <path d="M20.5718 154.57L19.6234 153.222L24.6026 149.576L15.9087 148.07L14.6442 146.326L21.7573 147.673L24.6026 138.875L25.7881 140.54L23.338 147.911L26.1042 148.466L29.6608 145.93L30.6092 147.277L20.5718 154.57Z" fill="#1B3B36"/>
                            <path d="M20.5718 154.57L19.6234 153.222L24.6026 149.576L15.9087 148.07L14.6442 146.326L21.7573 147.673L24.6026 138.875L25.7881 140.54L23.338 147.911L26.1042 148.466L29.6608 145.93L30.6092 147.277L20.5718 154.57Z" fill="black" fillOpacity="0.2"/>
                            <path d="M2.47332 117.473L2.15718 115.808L7.37349 114.857L6.18796 108.436L0.971657 109.388L0.655518 107.723L12.8269 105.424L13.143 107.089L7.53156 108.119L8.71708 114.54L14.3286 113.509L14.6447 115.174L2.47332 117.473Z" fill="#1B3B36"/>
                            <path d="M2.47332 117.473L2.15718 115.808L7.37349 114.857L6.18796 108.436L0.971657 109.388L0.655518 107.723L12.8269 105.424L13.143 107.089L7.53156 108.119L8.71708 114.54L14.3286 113.509L14.6447 115.174L2.47332 117.473Z" fill="black" fillOpacity="0.2"/>
                            <path d="M0.0234735 86.6374C0.339613 82.6741 3.65908 81.0095 7.05758 81.2473C10.4561 81.4851 13.3804 83.7838 12.9852 87.7471C12.6691 91.7104 9.3496 93.3749 5.95109 93.1371C2.63163 92.8994 -0.292666 90.6006 0.0234735 86.6374ZM11.6416 87.6678C11.8787 84.6557 9.42863 83.1497 6.89951 82.9119C4.3704 82.6741 1.68321 83.7045 1.4461 86.7166C1.209 89.7287 3.65908 91.2348 6.1882 91.4726C8.63828 91.7896 11.3255 90.7592 11.6416 87.6678Z" fill="#1B3B36"/>
                            <path d="M0.0234735 86.6374C0.339613 82.6741 3.65908 81.0095 7.05758 81.2473C10.4561 81.4851 13.3804 83.7838 12.9852 87.7471C12.6691 91.7104 9.3496 93.3749 5.95109 93.1371C2.63163 92.8994 -0.292666 90.6006 0.0234735 86.6374ZM11.6416 87.6678C11.8787 84.6557 9.42863 83.1497 6.89951 82.9119C4.3704 82.6741 1.68321 83.7045 1.4461 86.7166C1.209 89.7287 3.65908 91.2348 6.1882 91.4726C8.63828 91.7896 11.3255 90.7592 11.6416 87.6678Z" fill="black" fillOpacity="0.2"/>
                            <path d="M6.66319 63.9679L5.24057 67.8519L3.89697 67.3763L7.29547 58.0229L8.63907 58.4985L7.21644 62.3826L17.57 66.1873L17.0168 67.7726L6.66319 63.9679Z" fill="#1B3B36"/>
                            <path d="M6.66319 63.9679L5.24057 67.8519L3.89697 67.3763L7.29547 58.0229L8.63907 58.4985L7.21644 62.3826L17.57 66.1873L17.0168 67.7726L6.66319 63.9679Z" fill="black" fillOpacity="0.2"/>
                            <path d="M13.8528 45.4987L18.5949 38.3647L19.7804 39.1574L15.9077 44.9438L19.1481 47.1633L22.7047 41.7732L23.8902 42.5658L20.3336 47.9559L23.8902 50.3339L27.7629 44.5475L28.9485 45.3401L24.1273 52.5533L13.8528 45.4987Z" fill="#1B3B36"/>
                            <path d="M13.8528 45.4987L18.5949 38.3647L19.7804 39.1574L15.9077 44.9438L19.1481 47.1633L22.7047 41.7732L23.8902 42.5658L20.3336 47.9559L23.8902 50.3339L27.7629 44.5475L28.9485 45.3401L24.1273 52.5533L13.8528 45.4987Z" fill="black" fillOpacity="0.2"/>
                            <path d="M28.3207 27.1878L29.5062 26.0781L36.9355 34.2425L41.7566 29.8036L42.705 30.8341L36.6193 36.3827L28.3207 27.1878Z" fill="#1B3B36"/>
                            <path d="M28.3207 27.1878L29.5062 26.0781L36.9355 34.2425L41.7566 29.8036L42.705 30.8341L36.6193 36.3827L28.3207 27.1878Z" fill="black" fillOpacity="0.2"/>
                            </svg>
                    </div>
                </div>

                <div className="facilities-places" id="facilities-places">
                    <details className="details" id="restaurant">
                        <summary className="facilities-places__heading" >
                            
                            <Image 
                                src={facilities01}
                                className="facilities-places__heading-img"
                                alt='ice restaurant'
                            />
                            <span className="facilities-places__heading-number">01</span>
                            <p className="facilities-places__heading-text">Ice Restaurant</p>
                            <div className="facilities-places__heading-marker">
                                <svg className="facilities-places__heading-marker__head-arrow" width="24" height="18" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 1C17 1 14.6667 1.66667 12.6667 3.66667C10.6667 5.66667 9 9 9 9C9 9 7.33333 5.66667 5.33333 3.66667C3.33333 1.66667 1 0.999999 1 0.999999" stroke="#444" strokeWidth="2"/>
                                </svg>
                                <div className="facilities-places__heading-marker__head-line"></div>
                            </div>
                        </summary>
                        <div className="facilities-places__content">
                                <div className="facilities-places__content-left-button">
                                    <a href="#conference">
                                        <svg className="facilities-places__content-left-button__polygon" width="130" height="130" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.32" d="M10.6339 10.6339L35 0.541196L59.3661 10.6339L69.4588 35L59.3661 59.3661L35 69.4588L10.6339 59.3661L0.541196 35L10.6339 10.6339Z" stroke="#444"/>
                                        </svg>
                                        <svg className="facilities-places__content-left-button__head-arrow" width="24" height="18" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 1C17 1 14.6667 1.66667 12.6667 3.66667C10.6667 5.66667 9 9 9 9C9 9 7.33333 5.66667 5.33333 3.66667C3.33333 1.66667 1 0.999999 1 0.999999" stroke="#444" strokeWidth="2"/>
                                        </svg>
                                        <div className="facilities-places__content-left-button__head-line"></div>
                                    </a>
                                </div>
                            <div className="facilities-places__content-mid">
                                <span className="facilities-places__content-mid__number">01</span>
                                <h3 className="facilities-places__content-mid__heading">Ice Restaurants</h3>
                                <p className="facilities-places__content-mid__description">The hotel's exclusive infrastructure is complemented by the unique atmosphere of the Safe Restaurant. Author’s menu, extensive wine card, and live music will set you for the correct mood.</p>
                            </div>
                            
                            <Image 
                                src={facilities01}
                                className='facilities-places__content-right__img'
                                alt='ice restaurant'
                            />
                        </div>
                    </details>
                    <div className="divider m-5-0"></div>
                    <details className="details" id="conference">
                        <summary className="facilities-places__heading">
                            <Image 
                                src={facilities02}
                                className='facilities-places__heading-img'
                                alt='Conference Hall'
                            />
                            <span className="facilities-places__heading-number ml--22">02</span>
                            <p className="facilities-places__heading-text">Conference Hall</p>
                            <div className="facilities-places__heading-marker">
                                <svg className="facilities-places__heading-marker__head-arrow" width="24" height="18" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 1C17 1 14.6667 1.66667 12.6667 3.66667C10.6667 5.66667 9 9 9 9C9 9 7.33333 5.66667 5.33333 3.66667C3.33333 1.66667 1 0.999999 1 0.999999" stroke="#444" strokeWidth="2"/>
                                </svg>
                                <div className="facilities-places__heading-marker__head-line"></div>
                            </div>
                        </summary>
                        <div className="facilities-places__content">
                                <div className="facilities-places__content-left-button mt-75 mt-58 translate">
                                    <a href="#winebar">
                                        <svg className="facilities-places__content-left-button__polygon" width="130" height="130" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.32" d="M10.6339 10.6339L35 0.541196L59.3661 10.6339L69.4588 35L59.3661 59.3661L35 69.4588L10.6339 59.3661L0.541196 35L10.6339 10.6339Z" stroke="#444"/>
                                        </svg>
                                        <svg className="facilities-places__content-left-button__head-arrow" width="24" height="18" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 1C17 1 14.6667 1.66667 12.6667 3.66667C10.6667 5.66667 9 9 9 9C9 9 7.33333 5.66667 5.33333 3.66667C3.33333 1.66667 1 0.999999 1 0.999999" stroke="#444" strokeWidth="2"/>
                                        </svg>
                                        <div className="facilities-places__content-left-button__head-line"></div>
                                    </a>
                                </div>
                            <div className="facilities-places__content-mid mt-75 mt-58">
                                <span className="facilities-places__content-mid__number">02</span>
                                <h3 className="facilities-places__content-mid__heading">Conference Hall</h3>
                                <p className="facilities-places__content-mid__description">The hotel's exclusive infrastructure is complemented by the unique atmosphere of the Safe Restaurant. Author’s menu, extensive wine card, and live music will set you for the correct mood.</p>
                            </div>
                            
                            <Image 
                                src={facilities02}
                                className="facilities-places__content-right__img mt--85 mt--75"
                                alt='Conference Hall'
                            />
                        </div>
                    </details>
                    <div className="divider m-5-0"></div>
                    <details className="details" id="winebar">
                        <summary className="facilities-places__heading">
                            
                            <Image 
                                src={facilities03}
                                className='facilities-places__heading-img'
                                alt='Wine Bar'
                            />
                            <span className="facilities-places__heading-number ml--18">03</span>
                            <p className="facilities-places__heading-text">Wine Bar</p>
                            <div className="facilities-places__heading-marker">
                                <svg className="facilities-places__heading-marker__head-arrow" width="24" height="18" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 1C17 1 14.6667 1.66667 12.6667 3.66667C10.6667 5.66667 9 9 9 9C9 9 7.33333 5.66667 5.33333 3.66667C3.33333 1.66667 1 0.999999 1 0.999999" stroke="#444" strokeWidth="2"/>
                                </svg>
                                <div className="facilities-places__heading-marker__head-line"></div>
                            </div>
                        </summary>
                        <div className="facilities-places__content">
                                <div className="facilities-places__content-left-button mt-75 mt-58 translate">
                                    <a href="#our-gallery">
                                        <svg className="facilities-places__content-left-button__polygon" width="130" height="130" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.32" d="M10.6339 10.6339L35 0.541196L59.3661 10.6339L69.4588 35L59.3661 59.3661L35 69.4588L10.6339 59.3661L0.541196 35L10.6339 10.6339Z" stroke="#444"/>
                                        </svg>
                                        <svg className="facilities-places__content-left-button__head-arrow" width="24" height="18" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 1C17 1 14.6667 1.66667 12.6667 3.66667C10.6667 5.66667 9 9 9 9C9 9 7.33333 5.66667 5.33333 3.66667C3.33333 1.66667 1 0.999999 1 0.999999" stroke="#444" strokeWidth="2"/>
                                        </svg>
                                        <div className="facilities-places__content-left-button__head-line"></div>
                                    </a>
                                </div>
                            <div className="facilities-places__content-mid mt-75 mt-58">
                                <span className="facilities-places__content-mid__number">03</span>
                                <h3 className="facilities-places__content-mid__heading">Wine Bar</h3>
                                <p className="facilities-places__content-mid__description">The hotel's exclusive infrastructure is complemented by the unique atmosphere of the Safe Restaurant. Author’s menu, extensive wine card, and live music will set you for the correct mood.</p>
                            </div>
                            
                            <Image 
                                src={facilities03}
                                className='facilities-places__content-right__img mt--85 mt--75'
                                alt='Wine Bar'
                            />
                        </div>
                    </details>
                </div>
            </div>
        </section>
     );
}
 
export default Facilities;