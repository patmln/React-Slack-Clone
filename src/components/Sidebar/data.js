import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import MessageIcon from '@material-ui/icons/Message'
import DraftsIcon from '@material-ui/icons/Drafts'
import PeopleIcon from '@material-ui/icons/People'
import InboxIcon from '@material-ui/icons/Inbox'
import AppsIcon from '@material-ui/icons/Apps'

export const sidebarData = [
  {
    icon: <MessageIcon/>,
    text: 'Thread'
  },
  {
    icon: <InboxIcon/>,
    text: 'All DMs'
  },
  {
    icon: <DraftsIcon/>,
    text: 'Mentions & Reactions'
  },
  {
    icon: <BookmarkBorderIcon/>,
    text: 'Save Items'
  },
  {
    icon: <PeopleIcon/>,
    text: 'People & Group'
  },
  {
    icon: <AppsIcon/>,
    text: 'More'
  }
]
