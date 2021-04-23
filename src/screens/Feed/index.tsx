import React from "react";
import {
  FaChartBar,
  FaEllipsisH,
  FaMagic,
  FaRegCalendarAlt,
  FaRegComment,
  FaRegFileImage,
  FaRegFlushed,
  FaRegHeart,
  FaRegImages,
  FaRegShareSquare,
  FaRegSmile,
  FaRetweet,
} from "react-icons/fa";
import styles from "./styles.module.scss";

const FeedScreen: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>Home</div>
        <FaMagic />
      </div>
      <div className={styles.scroll}>
        <div className={styles.compose}>
          <img
            className={styles.avatar}
            src="https://pbs.twimg.com/profile_images/1344362381963653121/84yk6Fdc_400x400.jpg"
            alt=""
          />
          <div className={styles.compose__input}>
            <input type="text" placeholder="What's happening?" />
            <div className={styles.compose__bottom}>
              <div>
                <FaRegImages size={"1.3rem"} color="#00acee" />
                <FaChartBar size={"1.3rem"} color="#00acee" />
                <FaRegSmile size={"1.3rem"} color="#00acee" />
                <FaRegCalendarAlt size={"1.3rem"} color="#00acee" />
              </div>
              <div>
                <button>Tweet</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.feed__divisor}></div>
        <div className={styles.tweets}>
          <div className={styles.tweet}>
            <div className={styles.tweet_right}>
              <img
                className={styles.avatar}
                src="https://pbs.twimg.com/profile_images/1344362381963653121/84yk6Fdc_400x400.jpg"
                alt=""
              />
              <div>
                <div>
                  <span>Jessy Halife</span>
                  <span>@jessyhalife</span>
                  <span>· 2m</span>
                </div>
                <div>Este es mi primer tweet awww...</div>
                <div className={styles.icons}>
                  <FaRegComment color="#c4c4c4" />
                  <FaRetweet color="#c4c4c4" />
                  <FaRegHeart color="#c4c4c4" />
                  <FaRegShareSquare color="#c4c4c4" />
                </div>
              </div>
            </div>

            <div>
              <FaEllipsisH color="#c4c4c4" />
            </div>
          </div>
          <div className={styles.tweet}>
            <div className={styles.tweet_right}>
              <img
                className={styles.avatar}
                src="https://pbs.twimg.com/profile_images/1344362381963653121/84yk6Fdc_400x400.jpg"
                alt=""
              />
              <div>
                <div>
                  <span>Jessy Halife</span>
                  <span>@jessyhalife</span>
                  <span>· 2m</span>
                </div>
                <div>Este es mi primer tweet awww...</div>
                <div className={styles.icons}>
                  <FaRegComment color="#c4c4c4" />
                  <FaRetweet color="#c4c4c4" />
                  <FaRegHeart color="#c4c4c4" />
                  <FaRegShareSquare color="#c4c4c4" />
                </div>
              </div>
            </div>

            <div>
              <FaEllipsisH color="#c4c4c4" />
            </div>
          </div>
          <div className={styles.tweet}>
            <div className={styles.tweet_right}>
              <img
                className={styles.avatar}
                src="https://pbs.twimg.com/profile_images/1344362381963653121/84yk6Fdc_400x400.jpg"
                alt=""
              />
              <div>
                <div>
                  <span>Jessy Halife</span>
                  <span>@jessyhalife</span>
                  <span>· 2m</span>
                </div>
                <div>Este es mi primer tweet awww...</div>
                <div className={styles.icons}>
                  <FaRegComment color="#c4c4c4" />
                  <FaRetweet color="#c4c4c4" />
                  <FaRegHeart color="#c4c4c4" />
                  <FaRegShareSquare color="#c4c4c4" />
                </div>
              </div>
            </div>

            <div>
              <FaEllipsisH color="#c4c4c4" />
            </div>
          </div>
          <div className={styles.tweet}>
            <div className={styles.tweet_right}>
              <img
                className={styles.avatar}
                src="https://pbs.twimg.com/profile_images/1344362381963653121/84yk6Fdc_400x400.jpg"
                alt=""
              />
              <div>
                <div>
                  <span>Jessy Halife</span>
                  <span>@jessyhalife</span>
                  <span>· 2m</span>
                </div>
                <div>Este es mi primer tweet awww...</div>
                <div className={styles.icons}>
                  <FaRegComment color="#c4c4c4" />
                  <FaRetweet color="#c4c4c4" />
                  <FaRegHeart color="#c4c4c4" />
                  <FaRegShareSquare color="#c4c4c4" />
                </div>
              </div>
            </div>

            <div>
              <FaEllipsisH color="#c4c4c4" />
            </div>
          </div>
          <div className={styles.tweet}>
            <div className={styles.tweet_right}>
              <img
                className={styles.avatar}
                src="https://pbs.twimg.com/profile_images/1344362381963653121/84yk6Fdc_400x400.jpg"
                alt=""
              />
              <div>
                <div>
                  <span>Jessy Halife</span>
                  <span>@jessyhalife</span>
                  <span>· 2m</span>
                </div>
                <div>Este es mi primer tweet awww...</div>
                <div className={styles.icons}>
                  <FaRegComment color="#c4c4c4" />
                  <FaRetweet color="#c4c4c4" />
                  <FaRegHeart color="#c4c4c4" />
                  <FaRegShareSquare color="#c4c4c4" />
                </div>
              </div>
            </div>

            <div>
              <FaEllipsisH color="#c4c4c4" />
            </div>
          </div>
          <div className={styles.tweet}>
            <div className={styles.tweet_right}>
              <img
                className={styles.avatar}
                src="https://pbs.twimg.com/profile_images/1344362381963653121/84yk6Fdc_400x400.jpg"
                alt=""
              />
              <div>
                <div>
                  <span>Jessy Halife</span>
                  <span>@jessyhalife</span>
                  <span>· 2m</span>
                </div>
                <div>Este es mi primer tweet awww...</div>
                <div className={styles.icons}>
                  <FaRegComment color="#c4c4c4" />
                  <FaRetweet color="#c4c4c4" />
                  <FaRegHeart color="#c4c4c4" />
                  <FaRegShareSquare color="#c4c4c4" />
                </div>
              </div>
            </div>

            <div>
              <FaEllipsisH color="#c4c4c4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedScreen;
