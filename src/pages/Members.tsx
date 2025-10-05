import { Users, Mail, UserPlus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Members = () => {
  const members = [
    { name: "Rahul Sharma", role: "President", game: "Valorant", initials: "RS" },
    { name: "Priya Das", role: "Vice President", game: "CS:GO", initials: "PD" },
    { name: "Arjun Patel", role: "Tournament Lead", game: "League of Legends", initials: "AP" },
    { name: "Sneha Roy", role: "Social Media", game: "BGMI", initials: "SR" },
    { name: "Vikram Singh", role: "Tech Lead", game: "Dota 2", initials: "VS" },
    { name: "Ananya Gupta", role: "Event Manager", game: "FIFA", initials: "AG" },
    { name: "Rohan Verma", role: "Member", game: "Valorant", initials: "RV" },
    { name: "Ishita Kumar", role: "Member", game: "Apex Legends", initials: "IK" },
  ];

  const getRoleColor = (role: string) => {
    if (role.includes("President")) return "bg-accent/20 text-accent border-accent/50";
    if (role.includes("Lead") || role.includes("Manager")) return "bg-primary/20 text-primary border-primary/50";
    return "bg-secondary/20 text-secondary border-secondary/50";
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-orbitron text-5xl font-bold mb-4 text-gradient">
            Our Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Meet the passionate gamers who make our esports club thrive
          </p>
          <Button size="lg" className="glow-primary font-orbitron group">
            <UserPlus className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Join Our Community
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="glass-card border-primary/20 text-center">
            <CardHeader>
              <CardTitle className="font-orbitron text-4xl text-gradient">150+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Active Members</p>
            </CardContent>
          </Card>
          <Card className="glass-card border-secondary/20 text-center">
            <CardHeader>
              <CardTitle className="font-orbitron text-4xl text-gradient">25+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Gaming Teams</p>
            </CardContent>
          </Card>
          <Card className="glass-card border-accent/20 text-center">
            <CardHeader>
              <CardTitle className="font-orbitron text-4xl text-gradient">50+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Events Hosted</p>
            </CardContent>
          </Card>
        </div>

        {/* Core Team */}
        <section className="mb-12">
          <h2 className="font-orbitron text-3xl font-bold mb-8 flex items-center gap-2">
            <Users className="h-8 w-8 text-primary" />
            Core Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <Card
                key={index}
                className="glass-card border-primary/20 hover:border-primary/50 transition-all hover:glow-primary group"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-20 w-20 border-2 border-primary/50 group-hover:border-primary transition-colors">
                      <AvatarFallback className="bg-primary/10 text-primary font-orbitron text-xl">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="font-orbitron text-lg">{member.name}</CardTitle>
                  <Badge variant="outline" className={getRoleColor(member.role)}>
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">Main Game</p>
                  <p className="text-sm font-semibold text-secondary">{member.game}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Join CTA */}
        <Card className="glass-card border-primary/20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <CardContent className="py-12 text-center">
            <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-orbitron text-2xl font-bold mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for passionate gamers to join our community. Whether you're a casual player or competitive pro, there's a place for you here.
            </p>
            <Button size="lg" className="font-orbitron glow-primary">
              Apply for Membership
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Members;
