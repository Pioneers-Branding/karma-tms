import { Card, CardContent } from '@/components/ui/card';

interface AuthorBoxProps {
  name: string;
  role: string;
  bio?: string;
  image?: string;
}

const AuthorBox = ({ name, role, bio, image }: AuthorBoxProps) => {
  const defaultImage = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop';

  return (
    <Card className="bg-gradient-to-r from-[#572670]/5 to-transparent border-[#572670]/30">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img
            src={image || defaultImage}
            alt={`${name}, ${role}`}
            className="w-32 h-32 rounded-full object-cover border-4 border-[#572670]/20"
            loading="lazy"
          />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-[#572670] mb-2">About the Author</h3>
            <p className="text-xl font-semibold mb-2">{name}</p>
            <p className="text-gray-600 mb-4">{role}</p>
            {bio && <p className="text-gray-700">{bio}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthorBox;
