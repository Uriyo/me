import Image from "next/image";
import { format } from "date-fns";

interface AuthorCardProps {
  author: string;
  date: Date;
}

export default function AuthorCard({ author, date }: AuthorCardProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-9 w-9 rounded-full overflow-hidden">
         
          <Image
            src='https://static1.srcdn.com/wordpress/wp-content/uploads/2024/09/gojo-smile.png'
            alt={author}
            fill
            className="object-cover"
          />
        
          <div className="w-full h-full bg-secondary flex items-center justify-center">
            <span className="text-xl font-semibold text-secondary-foreground">
              {author}
            </span>
          </div>
        
      </div>
      <div>
        <h3 className="font-semibold">{author}</h3>
        <p className="text-sm text-muted-foreground">
          {format(date, "MMMM d, yyyy")}
        </p>
      </div>
    </div>
  );
}