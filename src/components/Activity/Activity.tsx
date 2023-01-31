import { Activity } from "../../../@types/user";
import styles from "./Activity.module.css"

function activity (activity: Activity){
    return (
        <div className={styles.container}>
            {
                activity.largeImageKey ? (
                    <>
                        <div className={styles.images}>
                            <img src={activity.largeImageKey} className={styles.largeImage} />
                        </div>
                        {
                            activity.smallImageKey ? (
                                <div className={styles.images}>
                                    <img src={activity.smallImageKey} className={styles.smallImage} />
                                </div>
                            ) : ''
                        }
                    </>
                ) : ''
            }

            <div>
            <div className={styles.activityTitle}>{activity.title}</div>
                {   
                    activity.description ? (
                        <div className={styles.description} >
                            {activity.description}
                        </div>
                    ) : ''
                }
                {   
                    activity.state ? (
                        <div className={styles.description} >
                            {activity.state}
                        </div>
                    ) : ''
                }
            </div>
        </div>
    )
}

export default activity