import React, {useState, useEffect} from 'react'
import Link from "next/link";
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Grid,
    Modal,
    TextField
} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core/styles";
import Comments from "@/components/Comments";
import {useAuth} from "@/lib/auth";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 250,
        marginBottom: 40,
    },
    media: {
        height: 200
    },
    center: {
        justifyContent: 'center'
    },
    title: {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-line-clamp": 1,
        "-webkit-box-orient": "vertical",
    },
    body: {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-line-clamp": 2,
        "-webkit-box-orient": "vertical",
    },
    modal: {
        position: 'absolute',
        width: 1000,
        height: 700,
        backgroundColor: 'white',
        border: '0px solid #000',
        boxShadow: theme.shadows[5],
        padding: "16px 32px 24px",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
    },
    textfields: {
        width: '100%'
    }
}));

const Articles = ({articles}) => {
    console.log('articles', articles)
    const {user} = useAuth()
    console.log('user', user)

    if (!articles) {
        return 'No se pudo obtener un artículo'
    }
    const classes = useStyles();
    const [modal, setModal] = useState(false)
    const [articleId, setArticleId] = useState(null)

    const handleCloseModal = () => {
        setModal(false)
    }
    const handleOpenModal = () => {
        // console.log('id del articulo', id)
        setModal(true)
        //setArticleId(id)
    }

    const body = (
        <div className={classes.modal}>
            <div align='center'>
                <h2>Articulo</h2>
            </div>
            <TextField label="Nombre" className={classes.textfields}/>
            <br/>
            {/*{*/}
            {/*    <Comments articleId={articleId}/>*/}
            {/*}*/}
            <Button onClick={() => handleCloseModal()}>Cancelar</Button>
        </div>
    )

    return (<>
            {
                <Modal
                    open={modal}
                    onClose={() => handleCloseModal()}
                >
                    {body}
                </Modal>
            }
            <Grid container direction='row' justify='space-evenly'>
                {
                    articles.map(article => (
                            <Card className={classes.root} key={article.id}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        component="img"
                                        src={`https://picsum.photos/300/350?sig=${article.id}`}
                                        title={classes.title}
                                    />
                                    <CardContent>
                                        <div style={{textAlign: 'center'}}>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="h2"
                                                className={classes.title}
                                            >
                                                {article.name}
                                            </Typography>
                                        </div>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                            className={classes.body}
                                        >
                                            {article.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>

                                <CardActions className={classes.center}>
                                    {
                                        user===null?(
                                            <Button
                                                size="small"
                                                color="primary"
                                                onClick={() => handleOpenModal()}
                                                disabled
                                            >
                                                Obtener
                                            </Button>,
                                                <p>Usted debe iniciar sesion</p>
                                        ):(
                                            <Button
                                                size="small"
                                                color="primary"
                                                onClick={() => handleOpenModal()}
                                            >
                                                Obtener
                                            </Button>
                                        )
                                    }

                                </CardActions>


                            </Card>
                        )
                    )
                }
            </Grid>
        </>
    )
    // return (
    //     <>
    //         <ul>
    //             {
    //                 articles.map(article=>{
    //                     return (
    //                         <li key={article.id}>{article.name}</li>
    //                     )
    //                 })
    //             }
    //         </ul>
    //     </>
    // )
}
export default Articles;

export async function getStaticProps(context) {
  console.log("context", context);

  try {
    const { articleId } = context.params;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${articleId}`
    );
    const data = await res.json();

    console.log("data", data);

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        article: data,
      }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      props: {
        article: null,
      },
    };
  }
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`);
  const data = await res.json();

  const articles = data.data;

  const paths = articles.map((article) => {
    return { params: { articleId: "" + article.id } };
  });

  return {
    paths,
    fallback: true, // See the "fallback" section below
  };
}