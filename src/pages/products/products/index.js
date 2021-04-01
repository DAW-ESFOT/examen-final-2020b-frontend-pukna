import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography, withStyles,
} from "@material-ui/core";
import Routes from "../../constants/routes";
import ArticleForm from "@/components/ArticleForm";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { Article } from "@/lib/articles";
import Loading from "@/components/Loading";
import React from "react";
//---------------------------------------
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, code) {
    return { name, code };
}



const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    root: {
        maxWidth: 345,
        marginBottom: 40,
    },
    media: {
        height: 140,
    },
    title: {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-line-clamp": 2,
        "-webkit-box-orient": "vertical",
    },
    body: {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-line-clamp": 3,
        "-webkit-box-orient": "vertical",
    },
});
export default function CustomizedTables() {

    const classes = useStyles();
    const { data, error } = useSWR("/products", fetcher);

    if (error) return <div>No se pudo cargar la lista de artículos</div>;
    if (!data) return <Loading />;

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Code</StyledTableCell>
                        <StyledTableCell align="left">Nombre</StyledTableCell>
                        <StyledTableCell align="left">Detalles</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.data.map((product, index) => (
                        <StyledTableRow key={product.name}>
                            <StyledTableCell component="th" scope="row">
                                {product.code}
                            </StyledTableCell>
                            <StyledTableCell align="left">{product.name}</StyledTableCell>
                            <StyledTableCell align="left">
                                <Link href={`${Routes.PRODUCTS}/${product.id}`}>
                                    <Button size="small" color="primary">
                                    Ver más
                                     </Button>
                                </Link>
                            </StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


// const Products = () => {


    // return (
    //     <>
    //         <productsForm />
    //         <Grid container direction="row" justify="space-between">
    //             {data.data.map((product, index) => (
    //                 <Card className={classes.root} key={product.id}>
    //                     <CardActionArea>
    //                         <CardMedia
    //                             className={classes.media}
    //                             // image={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${article.image}`}
    //                             // image={`https://picsum.photos/200/300?sig=${index}`}
    //                             name={product.name}
    //                         />
    //                         <CardContent>
    //                             <Typography
    //                                 gutterBottom
    //                                 variant="h5"
    //                                 component="h2"
    //                                 className={classes.title}
    //                             >
    //                                 {product.name}
    //                             </Typography>
    //                             <Typography
    //                                 variant="body2"
    //                                 color="textSecondary"
    //                                 component="p"
    //                                 className={classes.body}
    //                             >
    //                                 {product.code}
    //                             </Typography>
    //                         </CardContent>
    //                     </CardActionArea>
    //                     <CardActions>
    //                         <Link href={`${Routes.PRODUCTS}/${product.id}`}>
    //                             <Button size="small" color="primary">
    //                                 Ver más
    //                             </Button>
    //                         </Link>
    //                     </CardActions>
    //                 </Card>
    //                 // <li>
    //                 //   <Link href={`/articles/${article.id}`}>{article.title}</Link>
    //                 // </li>
    //             ))}
    //         </Grid>
    //     </>
    // );
// };

// export default Products;

// export async function getStaticProps() {
//   const response = await Article.getAll();
//   const articles = response.data.data;
//
//   return {
//     props: {
//       articles,
//     },
//   };
// }
