const ProductQueryParserMiddleware = (req, res, next) => {
  let where: any = {};
  const { categoryId, color, size } = req.query;

  if (size) {
    where.size = {
        has: size,
    }
  }
  if(color){
    where.color = color
  }
  if(categoryId){
    where.categoryId = categoryId
  }

  req.where = where;
  next();
};

export default ProductQueryParserMiddleware;
