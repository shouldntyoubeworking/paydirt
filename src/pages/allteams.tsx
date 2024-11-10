import Poll from "@/components/data/v3.json"
import Teams from '@/components/data/teams.json';
import DataTable from "@/components/table/datatable"
import Layout from "@/components/layout/";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
export default function AllTeams(){
    let fullNames = Teams["teams"].map((team) => {
        return `${team.Team}`
    })
    let data = Object.keys(Poll["Elo"]).map((team, index) => {
        return {
            "index": index+1,
            "team": Poll["Team"][team],
            "elo": Poll["Elo"][team],
        }
    })
    let missing_data = data.filter((item) => !fullNames.includes(item.team));
    data = data.filter((item) => fullNames.includes(item.team));
    data = data.map((team, index) => {
        return {
            "index": index+1,
            "team": team.team,
            "elo": team.elo,
        }
    })


    const columns = [
        {
            accessorKey: "index",
            header: ({ column }) => {
              return (
                <Button
                  variant="ghost"
                  onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                  Index
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              )
            },
            cell: ({ row }) => <div className="lowercase">{row.getValue("index")}</div>,
          },
        {
            accessorKey: "team",
            header: ({ column }) => {
              return (
                <Button
                  variant="ghost"
                  onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                  Team
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              )
            },
            cell: ({ row }) => <div className="lowercase">{row.getValue("team")}</div>,
          },
        {
            accessorKey: "elo",
            header: ({ column }) => {
              return (
                <Button
                  variant="ghost"
                  onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                  Elo
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              )
            },
            cell: ({ row }) => <div className="lowercase">{row.getValue("elo")}</div>,
          },
    ];
    

      return (
        <Layout url="allteams">
            <div className="page allteams">
               <div className="allteams-container">
               <div className="datatable">
               <DataTable columns={columns} data={data} row_length={20} />
                              </div>
               </div>
            </div>
        </Layout>
      );
    }