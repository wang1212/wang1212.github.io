/*! page footer */

// @flow

import './style.scss'

import blog from 'utils/blog_data.json'

// dom string
const Footer = () => `
    <footer class="page-footer container-fluid text-center px-0">
        <p class="h3">记录 分享 交流 思考</p>
        <p class="copyright">
            Contents & Images &copy; 2016 - ${new Date().getFullYear()} · <a href="${blog.github}" target="_blank">GitHub</a>
        </p>
    </footer>
`

export default Footer
