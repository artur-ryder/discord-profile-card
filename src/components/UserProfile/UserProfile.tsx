import styles from "./UserProfile.module.css"
import { User } from "../../../@types/user"
import Activity from "../Activity/Activity"

function UserProfile( props: User ) {
    const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]

    return (
        <div className={styles.container} >
            <div className={styles.banner} style={{
                backgroundColor: '#' + props.bannerColor
            }}></div>

                <div className={styles.avatarContainer} >
                    <img className={styles.avatar} src={props.avatar_img} alt="user avatar" />
                </div>
                <div className={styles.status} >
                    {
                        props.status === 'online' ? (
                            <div className={styles.online} ></div>
                        ) : ''
                    }
                    {
                        props.status === 'idle' ? (
                            <div className={styles.idle} ></div>
                        ) : ''
                    }
                    {
                        props.status === 'dnd' ? (
                            <div className={styles.dnd} ></div>
                        ) : ''
                    }
                    {
                        props.status === 'offline' ? (
                            <div className={styles.offline} ></div>
                        ) : ''
                    }
                </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                { 
                    props.badges ? (
                        <div className={styles.badges}>
                            {
                                props.badges.map( (badge, index) => {
                                    return (
                                        <div className={styles.badge} key={index}>
                                            <img src={badge.imgLink} alt={badge.name} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : (
                        <div className={styles.badges} style={{opacity: '0'}}></div>
                    ) 
                }

                <div className={styles.userInfo} >

                    <div className={styles.userNameContainer}>
                        <span className={styles.userName} >{props.username}</span>
                        <span className={styles.userTag} >#{props.discriminator}</span>
                    </div>
                    <div className={styles.division}></div>
                    {
                        props.aboutMe ? (
                        <div className={styles.section} >
                            <h2>About me</h2>
                            <div className="text" >{props.aboutMe}</div>
                        </div>
                        ) : ''
                    }

                    <div className={styles.section} >
                        <h2>discord member since</h2>
                        <div className={styles.svgIcon}>
                            <div className={styles.memberSinceDate}>{ 
                                `${
                                    months[new Date(props.createdAt).getMonth()]} ${
                                    new Date(props.createdAt).getDate()}, ${
                                    new Date(props.createdAt).getFullYear()}` 
                            }</div>
                        </div>
                    </div>

                    {
                        props.activity ? (
                            <div className={styles.section} >
                                <h2>playing a game</h2>
                                <Activity 
                                    title={props.activity.title}
                                    description={props.activity.description}
                                    state={props.activity.state}
                                    largeImageKey={props.activity.largeImageKey}
                                    smallImageKey={props.activity.smallImageKey}
                                />
                            </div>
                        ) : ''
                    }

                    <div className={styles.note} >
                        <h2>note</h2>
                        <p contentEditable placeholder="Click to add a note"></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserProfile