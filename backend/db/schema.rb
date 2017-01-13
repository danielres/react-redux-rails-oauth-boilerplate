# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170113202548) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "uuid-ossp"

  create_table "users", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.jsonb    "auths",      default: {"facebook"=>{}}
    t.jsonb    "profile",    default: {"email"=>nil, "phone"=>nil, "facebook"=>{"profile_url"=>nil, "invitation_url"=>nil, "member_intro_url"=>nil}, "last_name"=>nil, "first_name"=>nil, "membership"=>{"end_date"=>nil, "start_date"=>nil}, "display_name"=>nil}
    t.uuid     "inviter_id"
    t.datetime "created_at",                                                                                                                                                                                                                                        null: false
    t.datetime "updated_at",                                                                                                                                                                                                                                        null: false
    t.index ["auths"], name: "index_users_on_auths", using: :btree
    t.index ["inviter_id"], name: "index_users_on_inviter_id", using: :btree
    t.index ["profile"], name: "index_users_on_profile", using: :btree
  end

end
