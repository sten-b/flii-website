import { PropTypes } from 'prop-types';

import LoremPostCard from 'components/pages/blog/blog-post-card';

const LoremSearchHit = ({ post }) => (
  <LoremPostCard
    className="col-span-full border-t border-gray-new-15 py-8 first:border-0 first:border-t-0 first:pt-0 last:pb-0"
    key={post.slug}
    imageWidth={336}
    imageHeight={176}
    fullSize
    {...post}
  />
);

LoremSearchHit.propTypes = {
  post: PropTypes.object.isRequired,
};

export default LoremSearchHit;
