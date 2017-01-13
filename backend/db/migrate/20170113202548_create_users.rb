class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users, id: :uuid do |t|
      t.jsonb :auths, index: true, default: {facebook: {}}
      t.jsonb :profile, index: true, default: {
        display_name: nil,
        first_name: nil,
        last_name: nil,
        email: nil,
        phone: nil,
        membership: {
          start_date: nil,
          end_date: nil,
        },
        facebook:{
          profile_url: nil,
          member_intro_url: nil,
          invitation_url: nil,
        }
      }
      t.uuid :inviter_id, index: true
      t.timestamps
    end
  end
end
