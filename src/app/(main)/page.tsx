import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowUp,
  ChevronDown,
  ChevronUp,
  Clock,
  Image as ImageIcon,
  Link,
  MessageCircle,
  RefreshCw,
  Send,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between">
        <Button variant="link" className="p-0 space-x-2">
          <RefreshCw size={12} />
          <span className="text-xs">Perbarui</span>
        </Button>
        <span className="text-muted-foreground text-xs text-right">
          Beranda
        </span>
      </div>
      <div className="space-y-4">
        <div className="w-full p-5 border-[0.5px] rounded-lg bg-white">
          <Textarea
            placeholder="Buat Pertanyaan"
            className="focus:outline-none focus-visible:ring-0 border-0 text-lg p-0 resize-none min-h-2"
          />
          <div className="flex items-center justify-between mt-1">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="p-0 hover:bg-transparent">
                <Link className="w-4 h-4" />
              </Button>
              <Button variant="ghost" className="p-0 hover:bg-transparent">
                <ImageIcon className="w-4 h-4" />
              </Button>
              <Button variant="ghost"></Button>
            </div>
            <div className="flex items-center space-x-2">
              <Select defaultValue="1">
                <SelectTrigger className="text-xs w-[150px] focus-visible:ring-0">
                  <SelectValue>Pilih forum</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Forum 1</SelectItem>
                  <SelectItem value="2">Forum 2</SelectItem>
                  <SelectItem value="3">Forum 3</SelectItem>
                </SelectContent>
              </Select>
              <Button className="space-x-2">
                <Send size={16} />
                <span>Post</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full p-5 border-[0.5px] rounded-lg bg-white flex gap-8 transition-all duration-200 hover:cursor-pointer hover:bg-slate-300/20">
          <div className="flex flex-col items-center">
            <ChevronUp size={24} />
            <span className="text-xl">28</span>
            <ChevronDown size={24} />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Sample Postingan</p>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className=" w-4 h-4" />
                <span className="text-xs">2 jam yang lalu</span>
              </div>
            </div>
            <div className="flex space-x-2 ">
              <Badge
                variant="secondary"
                className="text-xs text-muted-foreground rounded-md"
              >
                category 1
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs text-muted-foreground  rounded-md"
              >
                category 2
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs text-muted-foreground rounded-md"
              >
                category 3
              </Badge>
            </div>
            <p className="line-clamp-3 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="flex justify-between items-center border-t border-slate-200 pt-2">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="#" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <p className="text-sm font-bold">John Doe</p>
                  <p className="text-xs text-muted-foreground">Forum ABC</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-xs">28 Jawaban</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-5 border-[0.5px] rounded-lg bg-white flex gap-8  transition-all duration-200 hover:cursor-pointer hover:bg-slate-300/2">
          <div className="flex flex-col items-center">
            <ChevronUp size={24} />
            <span className="text-xl">46</span>
            <ChevronDown size={24} />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Sample Postingan 2</p>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className=" w-4 h-4" />
                <span className="text-xs">4 jam yang lalu</span>
              </div>
            </div>
            <div className="flex space-x-2 ">
              <Badge
                variant="secondary"
                className="text-xs text-muted-foreground rounded-md"
              >
                category 1
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs text-muted-foreground  rounded-md"
              >
                category 2
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs text-muted-foreground rounded-md"
              >
                category 3
              </Badge>
            </div>
            <p className="line-clamp-3 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="flex justify-between items-center border-t border-slate-200 pt-2">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="#" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <p className="text-sm font-bold">Jane Doe</p>
                  <p className="text-xs text-muted-foreground">Forum ABC</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-xs">28 Jawaban</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
