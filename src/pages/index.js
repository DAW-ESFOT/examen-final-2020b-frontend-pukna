// import Head from "next/head";
// import styles from "@/styles/Home.module.css";
// import { Button, Link as MuiLink } from "@material-ui/core";
// import Link from "next/link";
// import Routes from "../constants/routes";
//
// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//
//       <main className={styles.main}>
//         <Button color="secondary" variant="contained">
//           Hello World
//         </Button>
//
//         <Link href={Routes.ARTICLES} passHref>
//           <MuiLink>Articles</MuiLink>
//         </Link>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>
//
//         <p className={styles.description}>
//           Get started by editing{" "}
//           <code className={styles.code}>pages/index.js</code>
//         </p>
//
//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>
//
//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>
//
//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>
//
//           <a
//             href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>
//
//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{" "}
//           <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//         </a>
//       </footer>
//     </div>
//   );
// }
//-----------------------------
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useAuth} from "../lib/auth";
import {Button, Grid, Link as MuiLink} from "@material-ui/core";
import Routes from "../constants/routes";
import Link from 'next/link';
import React from "react";
// import IconsFooter from "@/components/IconsFooter";



//FOOTER
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import Login from "./login";
import makeStyles from "@material-ui/core/styles/makeStyles";
//import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    textField: {
        width: "100%",
    },
    buttonWrapper: {
        textAlign: "center",
    },
    padd: {
        paddingLeft: 10
    }
}));



export default function Home() {
    const {login, user} = useAuth();
    return (
        <div className={styles.container}>
            <Head>
                <title>Store</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>


                    <Grid container style={{minHeight: '100vh'}}
                          alignItems='center'
                          justify='space-between'>
                       <h1 className={styles.title} >Proyecto examen</h1>

                                <img
                                    src='https://picsum.photos/300/350'
                                    style={{
                                        width: '100%', height: '100%', objectFit: 'cover',
                                        alt: 'brand'
                                    }}
                                />

                    </Grid>


            </main>

            {/*<footer>*/}
            {/*    <Grid container spacing={4}>*/}
            {/*        <Grid item xs>*/}
            {/*            <div class="">*/}

            {/*            </div>*/}
            {/*        </Grid>*/}
            {/*        <Grid item xs>*/}

            {/*            <Button href="https://www.facebook.com/"> <FacebookIcon color="primary"/></Button>*/}

            {/*        </Grid>*/}
            {/*        <Grid item xs>*/}

            {/*            <Button href="https://web.whatsapp.com/"> <WhatsAppIcon color="primary"/></Button>*/}

            {/*        </Grid>*/}
            {/*        <Grid item xs>*/}

            {/*            <Button href="https://www.instagram.com/"><InstagramIcon color="primary"/></Button>*/}

            {/*        </Grid>*/}
            {/*    </Grid>*/}
            {/*</footer>*/}
        </div>
    )
}