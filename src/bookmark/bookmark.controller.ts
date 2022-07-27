import {
    Body,
    Controller,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { BookmarkService } from './bookmark.service';
import { JwtGuard } from '../auth/gaurd';
import {
    CreateBookmarkDto,
    EditBookmarkDto,
} from './dto';
@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkCotroller {
    constructor(
        private bookmarkService: BookmarkService,
    ) { }

    @Get()
    getBookmarks(@GetUser('id') userId: number) {
        return this.bookmarkService.getBookmarks(
            userId,
        );
    }
    // @Get()
    // getBookmarks(@GetUser('id'))
}
