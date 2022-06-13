const Content = require("../models/content");
const Comment = require("../models/comment");

// 게시글 목록 조회 API
async function ContentList (req, res) {
    const contentList = await Content.getContentList();
    res.status(200).json( contentList );
};


// 게시글 작성 API
async function writeContent (req, res) {
    const { nickname } = res.locals.user;
    const { title, content, imageURL } = req.body;

    const postContent = await Content.create({
        nickname, title, content, imageURL,
    });

    res.status(201).json({ postContent, msg: '글이 작성되었습니다!', });
};



// 게시글 수정 API(patch)
async function modifyContent (req, res) {
    const { contentId } = req.params;
    const { title, content, imageURL } = req.body;
    const findContent = await Content.findById(contentId);
        
    const modifyPosting = await Content.findByIdAndUpdate(contentId, {
        $set: { title: title, content: content, imageURL: imageURL },
    });
    res.status(201).json({
        modifyPosting,
        msg: '글이 수정되었습니다.',
    });
};


// 게시글 삭제 API
async function deleteContent (req, res) {
    const { contentId } = req.params;
    const findContent = await Content.findById(contentId);

    if (findContent) {
        await Comment.deleteMany({ contentId:contentId });
        await Content.findByIdAndDelete(contentId);
        res.status(200).json({
            result: 'success',
            msg: '글이 삭제되었습니다.',
        });
    }
};


module.exports.writeContent = writeContent;
module.exports.ContentList = ContentList;
module.exports.modifyContent = modifyContent;
module.exports.deleteContent = deleteContent;
// module.exports.getContent = getContent;



// // 게시글 상세 조회 API
// async function getContent (req, res) {
//     const { contentId } = req.params;

//     const content = await Content.findById(contentId);
//     const contentWriter = await User.findById(content.nickname);
//     const comments = await 코멘트.find({ contentId:contentId });

//     const commentAuthorIds = comments.map(
//         (commentAuthor) => commentAuthor.authorId
//     );
//     const commentAuthorInfoById = await User.find({
//         _id: { $in: commentAuthorIds },
//     })
//         .exec()
//         .then((commentAuthor) =>
//             commentAuthor.reduce(
//                 (prev, ca) => ({
//                     ...prev,
//                     [ca.nickname]: ca,
//                 }),
//                 {}
//             )
//         );
    
//     const contentInfo = {
//         contentId: content._id,
//         title: content.title,
//         content: content.content,
//         닉네임 : 닉네임,
//         createdAt: content.createdAt,
//     };
//     // 코멘트 부분 수정 필요
//     const commentsInfo = comments.map((comment) => ({
//         commentId: comment.commentId,
//         content: comment.commentContent,
//         authorInfo: commentAuthorInfoById[comment.authorId],
//         createdAt: comment.createdAt,
//         }));
//     res.status(200).send({});
// };
