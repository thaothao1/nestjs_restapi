import {
    IsNotEmpty,
    IsOptional,
    IsString,
} from 'class-validator';

export class EditBookmarkDto {
    @IsString()
    @IsOptional()
    title?: String;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    link?: string;
}